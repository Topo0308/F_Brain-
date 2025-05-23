import { execSync } from 'child_process';

execSync('npx tailwindcss init -p', { stdio: 'inherit' });
execSync('npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch', { stdio: 'inherit' });