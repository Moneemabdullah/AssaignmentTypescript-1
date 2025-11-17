# Assignment: TypeScript – 1


## any, unknown, এবং never টাইপের পার্থক্য

### any
- যেকোনো ধরনের ভ্যালু গ্রহণ করে।
- টাইপ চেকিং প্রায় সম্পূর্ণ বন্ধ হয়ে যায় — তাই অনেক ঝুঁকিপূর্ণ।
- ভুল করলে TypeScript error দেখাবে না (runtime এ error দিতে পারে)।

**Example:**
```ts
let a: any = 10;
a = "hello"; // OK
a.run();     // Runtime error (TS cannot detect)
```

### unknown
- any এর মতো যেকোনো ভ্যালু রাখা যায়।
- তবে সরাসরি ব্যবহার করা যায় না — আগে টাইপ চেক করতে হয়।
- তাই এটি any এর তুলনায় অনেক নিরাপদ।

**Example:**

```ts
let b: unknown = "hello";
// b.toUpperCase(); Error (needs type checking)

if (typeof b === "string") {
  b.toUpperCase(); // ✔ Safe
}
```
### never
- এমন টাইপ, যা কখনোই রিটার্ন হয় না।
- সাধারণত error throw করা বা infinite loop এর ক্ষেত্রে ব্যবহার হয়।

**Example:**

```ts
function generateError(message: string): never {
  throw new Error(message);
}
```



## Enums এর ব্যবহার (Numeric & String Enum)
TypeScript-এ enum ব্যবহার করা হয় ফিক্সড ভ্যালুগুলোর একটি সেট সংরক্ষণ করতে — যেমন status, user roles, direction ইত্যাদি।

### Numeric Enum
- ভ্যালুগুলো অটোমেটিকভাবে ০, ১, ২… দিয়ে শুরু হয়।

**Example:**

```ts
enum Status {
  PENDING,     // 0
  APPROVED,    // 1
  REJECTED     // 2
}

let s: Status = Status.APPROVED;
```
###String Enum
- প্রতিটি enum মান manual string হিসেবে সেট করা থাকে।


**Example:**

```ts
enum Roles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest"
}

let r: Roles = Roles.ADMIN;
```
---
