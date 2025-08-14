// ================= Book Class =================
class Book {
  title;
  author;
  #isAvailable = true;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  borrow() {
    if (this.#isAvailable) {
      this.#isAvailable = false;
      console.log("Successfully borrowed", this.title);
    } else {
      console.log("The book has already been borrowed");
    }
  }

  returnBook() {
    this.#isAvailable = true;
    console.log("Successfully returned", this.title);
  }

  getStatus() {
    if (this.#isAvailable) {
      console.log(this.title, "is available");
    } else {
      console.log(this.title, "is not available");
    }
  }
}

// ================= User Class =================
class User {
  name;
  email;
  #role = "User";

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  borrowBook(book) {
    book.borrow();
  }

  returnBook(book) {
    book.returnBook();
  }

  getRole() {
    return this.#role;
  }
}

// ================= Admin Class =================
class Admin extends User {
  #role = "Admin";

  constructor(name, email) {
    super(name, email); // pass name and email to User constructor
  }

  addBook(book) {
    console.log(`The book "${book.title}" has been added successfully.`);
  }

  removeBook(book) {
    console.log(`The book "${book.title}" has been removed successfully.`);
  }

  getRole() {
    return this.#role;
  }
}

// ================= Testing =================
let book1 = new Book('Rich Dad Poor Dad', "Robert Kiyosaki");
let book2 = new Book('The Alchemist', "Paulo Coelho");

console.log("=== Book Tests ===");
book1.getStatus();
book1.borrow();
book1.getStatus();
book1.borrow(); // test borrowing already borrowed book
book1.returnBook();
book1.getStatus();

console.log("\n=== User Tests ===");
let user1 = new User("John Doe", "john@example.com");
console.log(user1.getRole());
user1.borrowBook(book2);
book2.getStatus();
user1.returnBook(book2);
book2.getStatus();

console.log("\n=== Admin Tests ===");
let admin1 = new Admin("Admin User", "admin@example.com");
console.log(admin1.getRole());
admin1.addBook(book1);
admin1.removeBook(book2);
