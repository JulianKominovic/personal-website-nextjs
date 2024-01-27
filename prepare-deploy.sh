rm -rf build
pnpm run build
mkdir -p build
cp -r .next/standalone build/
cp -r public build/standalone
cp -r .next/static build/standalone/.next
cp -r node_modules/styled-jsx build/standalone/node_modules/styled-jsx
git add .
git commit -m "chore: preparing deploy"