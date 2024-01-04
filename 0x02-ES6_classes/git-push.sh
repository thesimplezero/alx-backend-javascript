#!/bin/bash

# Function to push individual files
push_individual_files() {
    for file in "$@"; do
        git add "$file"
        read -p "Enter commit message for $file: " commit_message
        git commit -m "$commit_message"
        git push
    done
}

# Function to push entire folders
push_entire_folders() {
    for folder in "$@"; do
        git add "$folder/*"
        read -p "Enter commit message for $folder: " commit_message
        git commit -m "$commit_message"
        git push
    done
}

# Main script starts here

echo "Choose an option:"#!/bin/bash

# Function to push individual files
push_individual_files() {
    for file in "$@"; do
        git add "$file"
        read -p "Enter commit message for $file: " commit_message
        git commit -m "$commit_message"
        git push
    done
}

# Function to push entire folders
push_entire_folders() {
    for folder in "$@"; do
        git add "$folder"/*
        read -p "Enter commit message for $folder: " commit_message
        git commit -m "$commit_message"
        git push
    done
}

# Main script starts here

# Get the script directory
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Choose an option:"
echo "1. Push individual files"
echo "2. Push entire folders in the script directory"
read -p "Enter your choice (1 or 2): " option

case $option in
    1)
        files=$(ls "$script_dir")
        push_individual_files $files
        ;;
    2)
        folders=$(find "$script_dir" -maxdepth 1 -type d -not -name "." | sed -n '2,$p')
        push_entire_folders $folders
        ;;
    *)
        echo "Invalid option. Exiting."
        ;;
esac

echo "1. Push individual files"
echo "2. Push entire folders"
read -p "Enter your choice (1 or 2): " option

case $option in
    1)
        read -p "Enter space-separated file names: " files
        push_individual_files $files
        ;;
    2)
        read -p "Enter space-separated folder names: " folders
        push_entire_folders $folders
        ;;
    *)
        echo "Invalid option. Exiting."
        ;;
esac
