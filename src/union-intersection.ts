type UserRole = "admin" | "user"

const isAdmin = (role : UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard"
    }else if(role === "user"){
        return "User Dashboard"
    }else { 
        return "Guest Dashboard"
    }
}

// isAdmin("guest")

type Employee = {
    id: string;
    name: string;
    phnNo: string;
}

type Manager =  {
    designation: string;
    teamSize: number
}

type EmployeeManager = Employee & Manager

const badhon: EmployeeManager = {
    id: "233",
    name: "Badhon",
    phnNo: "01934232",
    designation: "manager",
    teamSize:21
}