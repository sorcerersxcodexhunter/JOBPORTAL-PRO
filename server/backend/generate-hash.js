import bcrypt from "bcryptjs";

async function generateHash() {
    const password = "admin123";
    const hash = await bcrypt.hash(password, 10);
    console.log("Password:", password);
    console.log("Generated Hash:", hash);
    
    const isValid = await bcrypt.compare(password, hash);
    console.log("Hash validation:", isValid);
}

generateHash();
