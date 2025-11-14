```
nvm use 20
npm install
```

# rn-reusables menu demo
`rn-reusables` works flawlessly with components like `Text` where the depending `@rn-primitive` doesn't have to resolve a seperate web source in vite.
```
npm run storybook
```

<img width="1982" height="1521" alt="Screenshot 2025-11-14 at 12 58 29 PM" src="https://github.com/user-attachments/assets/ab4a41aa-f88b-46eb-8ae6-852046c5266d" />

But then for @rn-primatives/menubar you can see it struggles to resolve the web sources from the dist
<img width="1982" height="1521" alt="Screenshot 2025-11-14 at 12 58 17 PM" src="https://github.com/user-attachments/assets/f12b5479-b1a7-4f25-beba-9b5a5812d200" />

# expo demo
Expo handles web as expected
<img width="1462" height="1136" alt="Screenshot 2025-11-14 at 12 57 55 PM" src="https://github.com/user-attachments/assets/34d95830-df3b-42c6-af67-77862bd4a80a" />
<img width="1462" height="1136" alt="Screenshot 2025-11-14 at 12 57 49 PM" src="https://github.com/user-attachments/assets/a1c843ae-a9ed-40b6-9a5f-4bc277b181c2" />
