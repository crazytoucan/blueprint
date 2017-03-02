#! /bin/sh
# Strips @types references from built declaration files.
# This makes our distributed package less opinionated about how
# consumers get their React typings.
find lib -name "*.d.ts" | xargs sed -i.bak -e 's#^/// <reference types=.*$##g'
