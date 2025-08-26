echo "~/.bash_profile"

# Set a basic PATH
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

# Function to add to PATH with priority (prepends to front)
add_to_path_on_priority() {
    if [ -d "$1" ] && [[ ":$PATH:" != *":$1:"* ]]; then
        export PATH="$1:$PATH"
    fi
}

# Function to add to PATH only if not already there
add_to_path() {
    if [ -d "$1" ] && [[ ":$PATH:" != *":$1:"* ]]; then
        export PATH="$PATH:$1"
    fi
}

# Priority PATH additions (prepended to front)
# Nix
add_to_path_on_priority '/nix/var/nix/profiles/default/bin'

# Standard PATH additions (appended to end)
# Add Homebrew paths manually
add_to_path "/usr/local/bin"
add_to_path "/usr/local/sbin"
# python
add_to_path "$HOME/.local/bin"
# melkey go version mgr
add_to_path "$HOME/.govm/shim"
# opencode
add_to_path "$HOME/.opencode/bin"

# Display PATH components with counts on shell startup
echo "PATH components with counts:"
echo "$PATH" | tr ':' '\n' | sort | uniq -c


# Function to recursively delete directories using rimraf
rimraf() {
    if [ $# -eq 0 ]; then
        echo "Usage: rimraf <directory1> [directory2 ...]"
        echo "Example: rimraf node_modules dist build"
        return 1
    fi
    
    # Loop through all arguments
    for dir in "$@"; do
        if [ ! -d "$dir" ]; then
            echo "Skipping: $dir (directory does not exist)"
            continue
        fi
        echo "Deleting: $dir"
        npx rimraf "$dir"
    done
}

# github
githubauth() {
  gh auth login
}
githubnew() {
  local repo_name="$1"
  if [ -z "$repo_name" ]; then
    echo "Usage: githubnew <repo-name>"
    echo "Example: githubnew my-awesome-project"
    return 1
  fi
  echo "Creating GitHub repository: $repo_name"
  gh repo create "$repo_name" --public --source=. --remote=origin
}
gitpushmain() {
  local commit_message="${1:-this}"
    git branch -M main && \
    git add . && \
    git commit -am "$commit_message" && \
    git push -u origin main
}
gitclean(){
  git rm -r --cached .
}


# fnm use .nvmrc or .node-version 
eval "$(fnm env --use-on-cd)"

# python aliases
alias python="python3"
alias pip="pip3"
