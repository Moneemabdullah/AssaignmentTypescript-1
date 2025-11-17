

3. any, unknown, এবং never এর পার্থক্য
✔ any

সব ধরনের ভ্যালু গ্রহণ করে।

টাইপ চেকিং বন্ধ হয়ে যায় (dangerous).

ভুল হলে TypeScript detect করতে পারে না।

let a: any = 10;
a = "hello"; // OK
a.run();     // runtime error হবে, TS ধরতে পারবে না

✔ unknown

any এর মতো সবকিছু গ্রহণ করে।

কিন্তু ব্যবহারের আগে TypeScript আপনাকে টাইপ চেক করতে বাধ্য করবে।

much safer than any.

let b: unknown = "hello";
// b.toUpperCase(); ❌ Error (type check ছাড়া ব্যবহার করা যাবে না)

if (typeof b === "string") {
  b.toUpperCase(); // ✔ now safe
}

✔ never

এমন টাইপ যেটি কখনো ঘটবে না।

সাধারণত error throw করা বা infinite loop এর ক্ষেত্রে ব্যবহার হয়।

function generateError(message: string): never {
  throw new Error(message);
}


4. Enums এর ব্যবহার (numeric & string enum)

TypeScript-এ enum ব্যবহার করা হয় fixed set of values সংরক্ষণ করতে। যেমন – status, roles, directions ইত্যাদি।


✔ Numeric Enum
enum Status {
  PENDING,     // 0
  APPROVED,    // 1
  REJECTED     // 2
}

let s: Status = Status.APPROVED;



✔ String Enum
enum Roles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest"
}

let r: Roles = Roles.ADMIN;# AssaignmentTypwscript-1
