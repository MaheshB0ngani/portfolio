# Firebase hosting and CI/CD setup

This document explains how to deploy this project to Firebase Hosting using GitHub Actions. It covers:

- Creating a Firebase project and enabling Hosting
- Creating a CI token (`firebase login:ci`) and adding GitHub secrets
- An optional, more secure service-account-based flow
- How the included GitHub Actions workflow works and how to test/troubleshoot

If you already followed earlier steps and added `firebase.json`, `.firebaserc`, and the GitHub Actions workflow, this guide will help you finish the manual steps and verify a successful deploy.

## Prerequisites

- Node.js & npm installed (Node 18 recommended for the workflow)
- `firebase-tools` CLI installed locally for manual tasks (optional for CI)
- Admin access to the Firebase console for the target project
- GitHub repository admin access to add repository secrets

## Quick overview of the repo files added by the automation

- `firebase.json` — Hosting config (public: `dist`) and a rewrite for SPA routing to `index.html`.
- `.firebaserc` — Contains a `default` project id placeholder. You can replace the placeholder with your Firebase project id or rely on the `FIREBASE_PROJECT` secret used by the Actions workflow.
- `.github/workflows/firebase-deploy.yml` — The GitHub Actions workflow that runs on push to `main`, builds the project, installs `firebase-tools`, and runs `firebase deploy` using `FIREBASE_TOKEN` and `FIREBASE_PROJECT` secrets.

## Step 1 — Create a Firebase project and enable Hosting

1. Open the Firebase Console: https://console.firebase.google.com/
2. Click **Add project** and follow the prompts.
3. After the project is created, open **Hosting** in the left sidebar and click **Get started**.
4. You can register a site id or accept the default; take note of your Firebase **project id** (you'll need it below).

Optionally, update `.firebaserc` in the repo with your project id (replace `YOUR_FIREBASE_PROJECT_ID`). This is optional because the workflow passes the `FIREBASE_PROJECT` environment variable from GitHub Secrets.

## Step 2 — Generate a CI token (quick token-based approach)

This is the simplest route: generate a long-lived token using `firebase login:ci` and store it in GitHub Secrets.

1. Install `firebase-tools` locally if you don't have it:

```powershell
npm install -g firebase-tools
```

2. Log in and create a CI token:

```powershell
firebase login:ci
```

The command prints a token string. Copy that token — you'll add it to GitHub as a secret named `FIREBASE_TOKEN`.

Note: `firebase login:ci` tokens are long-lived and effectively allow full deploy access. Treat them like secrets.

## Step 3 — Add required GitHub Secrets

In your GitHub repository: Settings → Secrets and variables → Actions → New repository secret.

- `FIREBASE_TOKEN` — the token from `firebase login:ci`
- `FIREBASE_PROJECT` — the Firebase project id (e.g., `my-firebase-project-12345`)

You can set both using the GitHub UI or the `gh` CLI. Example PowerShell using `gh`:

```powershell
gh secret set FIREBASE_TOKEN --body "<PASTE_TOKEN_HERE>"
gh secret set FIREBASE_PROJECT --body "<YOUR_FIREBASE_PROJECT_ID>"
```

If you prefer to store the project id only in `.firebaserc` in the repo, you may leave `FIREBASE_PROJECT` out, but using a secret is often cleaner for CI.

## How the included GitHub Actions workflow works

File: `.github/workflows/firebase-deploy.yml`

- Runs on pushes to `main`.
- Steps:
  - checkout
  - setup Node 18
  - `npm ci` (install dependencies)
  - `npm run build` (produces `dist`)
  - install `firebase-tools`
  - run `firebase deploy --only hosting --project "$FIREBASE_PROJECT" --token "$FIREBASE_TOKEN"`

Make sure `npm run build` outputs the static site into `dist` (Vite default). If your build uses another directory, update `firebase.json` accordingly.

## Optional: More secure service-account-based flow (recommended for production)

Long-lived CI tokens (`firebase login:ci`) are convenient but less secure. For production, prefer a service account with limited permissions.

1. Create a Google Cloud service account for the Firebase project:
   - Visit: https://console.cloud.google.com/iam-admin/serviceaccounts
   - Select your Firebase project, Create Service Account.
   - Grant the service account the **Cloud Run Admin** or **Firebase Hosting Admin** role (or narrow scope to Hosting-related permissions). Minimal permission is recommended; `roles/firebasehosting.admin` is a Hosting-specific role.
   - Create a JSON key for the service account and download it.

2. Add the service account JSON to GitHub Secrets (e.g., `FIREBASE_SERVICE_ACCOUNT`).

3. Replace the workflow step that installs `firebase-tools` + `firebase deploy` with the official GitHub Action that supports service account keys, for example:

```yaml
- name: Deploy to Firebase Hosting
  uses: FirebaseExtended/action-hosting-deploy@v0
  with:
    repoToken: ${{ secrets.GITHUB_TOKEN }}
    firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
    projectId: ${{ secrets.FIREBASE_PROJECT }}
    channelId: live

# or for a production deploy:
    # channelId: live
```

This removes the need for `firebase login:ci` tokens and is more auditable.

## Testing and verification

1. Commit and push your changes (or just push the existing workflow and secrets). Pushing to `main` will trigger the action.
2. Open Actions → select the `Deploy to Firebase Hosting` run, watch logs for `npm ci`, `npm run build`, and `firebase deploy` steps.
3. On success, the action logs will show the Hosting URLs (typically `https://<project-id>.web.app`). Visit the URL.
4. Verify SPA routing: open a nested route (e.g., `/projects/some-project`) and refresh — it should load, due to the rewrite in `firebase.json`.

## Troubleshooting

- Build fails with Node / npm errors:
  - Confirm Node version (workflow uses Node 18). Locally, run `node -v`.
  - Ensure dependencies are installed and `package-lock.json` is in repo for `npm ci`.

- `firebase deploy` fails with `401` / permission errors:
  - Ensure the token is valid and not expired. Regenerate using `firebase login:ci` if needed.
  - Ensure `FIREBASE_PROJECT` is set to the correct project id and the token has access to that project.

- Workflow cannot find `firebase` or `firebase deploy` command:
  - The workflow installs `firebase-tools` globally. If you changed the workflow, confirm `npm install -g firebase-tools` runs before `firebase deploy`.

- SPA routing returns 404 on refresh:
  - Confirm `firebase.json` contains the rewrites to `index.html` and Hosting is using the deployed `dist` files.
  - Confirm the `public` field in `firebase.json` is `dist` (or set to your build output dir).

## Security & best practices

- Prefer a service account (JSON key) + official action for production deploys.
- Limit deployments by branch or tag (modify `on:` in the workflow to `push.tags` or a protected branch).
- Use GitHub Environments + required reviewers if you need approval for production deploys.

## Next steps I can help with

- Create a second workflow that uses a service account JSON key (`FIREBASE_SERVICE_ACCOUNT`) and `FirebaseExtended/action-hosting-deploy@v0`.
- Restrict deploys to tags/releases, or add a manual `workflow_dispatch` trigger for manual deploys.
- Add health checks or a smoke-test step that requests the site after deploy and fails if the status is not 200.

If you'd like, I can implement the service-account workflow and add the exact `gh` or PowerShell commands for the service-account creation steps.
