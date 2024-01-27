rm -rf build
pnpm run build
mkdir -p build
cp -r .next/standalone build/
cp -r public build/standalone
cp -r .next/static build/standalone/.next
git add .
git commit -m "chore: preparing deploy"