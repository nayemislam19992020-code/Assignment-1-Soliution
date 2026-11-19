//*funtion multiplyValue()

function multiplyValue(
    value: number,
    multiplier?: number
): number {
    return value * (multiplier ?? 2);
}



console.log(multiplyValue(10)); 
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));


//*processInput() Union Type

function processInput(
    value:string | number | boolean
): string | number {

    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    if (typeof value === "number") {
        return value * 10;
    }

    return value ? "Active" : "innactive"
}

processInput("  TypeScript  "); // typescript
processInput(7);                // 70
processInput(true);             // Active
processInput(false);            // Inactive

//*formatCoordinate()
 
// [latitude, longitude, locationName]

// [23.81, 90.41, "Dhaka"]


// [number, number, string]

//*Readonly Tuple

function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const [ latitude, longitude, locationName] = coordinate;
    return 'Location: ${locationName} (${latitude}, ${longitude})';
}


//*concatenateArrays()

'concatenateArray(["a", "b"], ["c", "d"])';

'concatenateArrays([1, 2], [3, 4], [5])';

function concatenateArray<T>(
    ...array: T[][]
): T[] {
    return array.flat();
}

//*Course Interface এবং getPopularCourses()


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {

    return courses.filter((course) => {
        return course.isPublished === true &&
            course.students >= minStudents;
    });
}

//*pluckValues()

const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];

//*keyof

type User = {
id: number;
 name: string;
 role: string
};

type UserKeys = keyof User;

//*Function- keys

function pluckValues<T, k extends keyof T>(
    items: T[],
    key: k
): T[k][ ] {

    return items.map((item) => item[key]);
}

//*Employee এবং Manager Class


class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {

        return 'Employee: ${this.name}, Base Salary: ${this.baseSalary}'
    }
}

//*Manager Class


class Manager extends Employee {
    private department: string;

    constructor(
        name: string,
        baseSalary: number,
        deparmant: string
     ) {
        super(name, baseSalary);
        this.department = 'department';
    }
    getRoleInfo(): string {
        return 'manager of ${this.department}: ${this.name}';
    }
}

//*validateAgeAsync() 

function validateAgeAsync(
    age: number
): Promise<string> {

    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(
                new Error("access Denied: Must be 18 or older")
            );
            return;
        }
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000
        );
    });
}