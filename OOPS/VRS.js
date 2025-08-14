class Vehicle {
    model;
    brand;
    #isAvailable = true;
    constructor(model,brand){
        this.model = model;
        this.brand= brand;
    }
    rent(){
        if(this.#isAvailable){
            this.#isAvailable = false;
            console.log("Success : Successfully Rented !")
        } else{
            console.log("Failed: Already Rented !")

        }

    }

    returnVehicle(){
            this.#isAvailable = true;
            console.log("Success : Successfully Returned !")

    }
    getStatus (){
        return this.#isAvailable;

    }
}

class Customer{
    name;
    email;
    #rentedVehicles = []
    #role="Customer";
    constructor(name,email){
        this.name = name ;
        this.email = email;
    }

    rentVehicle(vehicle){
        if(vehicle.getStatus() ===true){
            vehicle.rent()
            this.#rentedVehicles.push(vehicle.model)
        }

    }
    
    returnVehicle(vehicle){
        vehicle.returnVehicle()

    }
     getRentedVehicles(){
        console.log(this.#rentedVehicles)

     }

     getRole(){
        return this.#role;
     }
}

class Admin extends Customer{
    #role="Admin";
    constructor(name,email){
        super(name,email)
    }

    addVehicle(vehicle){
        console.log(vehicle,"has been added")

    }
    removeVehicle(vehicle){
        console.log(vehicle,"has been removed")


    }
   
     getRole(){
        return this.#role;
     }
}

// ================= Testing Vehicle, Customer, Admin =================

let vehicle1 = new Vehicle("Model S", "Tesla");
let vehicle2 = new Vehicle("Mustang", "Ford");

console.log("=== Vehicle Tests ===");
console.log("Vehicle1 available?", vehicle1.getStatus());
vehicle1.rent(); // Should succeed
vehicle1.rent(); // Should fail
console.log("Vehicle1 available after rent?", vehicle1.getStatus());
vehicle1.returnVehicle();
console.log("Vehicle1 available after return?", vehicle1.getStatus());

console.log("\n=== Customer Tests ===");
let customer1 = new Customer("John Doe", "john@example.com");
console.log(customer1.getRole());

customer1.rentVehicle(vehicle1); // Should succeed
customer1.rentVehicle(vehicle2); // Should succeed
customer1.rentVehicle(vehicle1); // Should fail (already rented by John)
customer1.getRentedVehicles();   // Should show ["Model S", "Mustang"]

customer1.returnVehicle(vehicle1); // Returns vehicle1
vehicle1.getStatus();               // Should be true

console.log("\n=== Admin Tests ===");
let admin1 = new Admin('Billa', "billa@nm.com")
console.log(admin1.getRole());
admin1.addVehicle(vehicle1);
admin1.removeVehicle(vehicle2);

// Admin can also rent vehicles
admin1.rentVehicle(vehicle1);
admin1.getRentedVehicles();
