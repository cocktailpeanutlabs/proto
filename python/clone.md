# Set up a new python server project by cloning a git repo

## What it does

This sets up a project for a python server app by cloning from a remote git URL.

1. Clones the given git URL into `app`.
2. Adds basic launcher scripts for installing the `requirements.txt` file and running the `app.py` file in the project.

## Usage

To automatically launch the app in a browser, make sure:

- In your app, print the URL of the server after it starts.
- Pinokio will automatically detect the printed URL from the terminal and launch the app in a new tab.
