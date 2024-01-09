#!/bin/bash

# Function to perform git add, commit, and push for each file
process_files() {
  local files=("$@")

  for file in "${files[@]}"; do
    echo "Processing file: $file"

    # Git add
    git add "$file"

    # Ask for commit message
    read -p "Enter commit message for $file: " commit_message

    # Git commit
    git commit -m "$commit_message"

    # Git push
    git push origin HEAD
  done
}

# Main script
files=(
  "../0x00-ES6_basic/100-createIteratorObject.js"
  "../0x00-ES6_basic/101-iterateThroughObject.js"
  "../0x01-ES6_promise/100-await.js"
  "../0x01-ES6_promise/babel.config.js"
  "../0x01-ES6_promise/package.json"
  "../0x01-ES6_promise/utils.js"
  "0-get_list_students.js"
  "1-get_list_student_ids.js"
  "10-update_uniq_items.js"
  "100-weak.js"
  "2-get_students_by_loc.js"
  "3-get_ids_sum.js"
  "4-update_grade_by_city.js"
  "5-typed_arrays.js"
  "6-set.js"
  "7-has_array_values.js"
  "8-clean_set.js"
  "9-groceries_list.js"
  "git_auto_commit.sh"
  "../package.json"
)

process_files "${files[@]}"

echo "Script finished processing all hardcoded files."
