
let bankBranchInstance = null;
class bankBranch {
    construct(branchinfo) {
        class BankBranch {
            constructor(branchInfo) {
              return !BankBranch.bankBranchInstance ? 
                (this.branchInfo = branchInfo, BankBranch.bankBranchInstance = this) : 
                BankBranch.bankBranchInstance;
            }
          }         
    }
}

getBranchInfo() {
     return this.branchInfo;
}
   
//Usage
const branchA = new bankBranch("Main Street Branch");
console.log(branchA.getBranchInfo());

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo());
