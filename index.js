
let bankBranchInstance = null;
// Define the Singleton class for BankBranch
class BankBranch {
  constructor(branchInfo) {
    // Check if the instance already exists; if yes, return it; otherwise, create a new instance
    bankBranchInstance = !bankBranchInstance ? this : bankBranchInstance;
    
    // Assign branchInfo if it's a new instance
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    
    return bankBranchInstance;
  }

  // Define methods to manage branch information
  getBranchInfo() {
    return this.branchInfo;
  }
}


// Usage
const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); 

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); 

console.log(branchA === branchB); 
