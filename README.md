# 🧠 Shallow vs Deep Copy in JavaScript

This project demonstrates the fundamental differences between **shallow copy** and **deep copy** in JavaScript, including real-world use cases, code examples, and best practices.

### 🔹 Copying in JS

In JavaScript, when we assign one variable to another, especially with objects or arrays, we are not copying the actual value — we are copying the reference.

🔥 Primitive vs Reference Types
Primitive types (like number, string, boolean, null, undefined, symbol, bigint) are copied by value.

Reference types (like object, array, function) are copied by reference.


### 🔹 Shallow Copy
A shallow copy duplicates only the first level of the object/array. If the original contains nested objects, those nested parts are still referenced.



### 🔹 Deep Copy
A deep copy duplicates everything — including nested objects and arrays. Changes in the copied object do not affect the original object.


---

## 📌 Topics Covered

- ✅ Copy by value vs copy by reference
- ✅ Shallow Copy
- ✅ Deep Copy
- ✅ Built-in methods: `Object.assign()`, Spread `...`
- ✅ Manual deep copy using recursion
- ✅ `JSON.parse(JSON.stringify(obj)`
- ✅ `structuredClone()`
- ✅ `lodash.cloneDeep()`
- ✅ Copying arrays vs objects
- ✅ What doesn't get copied (functions, prototypes, etc.)

---
```
| Type      | Behavior                | Example          |
| --------- | ----------------------- | ---------------- |
| Primitive | Copied **by value**     | Numbers, Strings |
| Objects   | Copied **by reference** | Arrays, Objects  |
```

```
🧑‍💻 Author
Saikrishna-flex
```