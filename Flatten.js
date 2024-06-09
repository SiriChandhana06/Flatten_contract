const fs = require('fs');
const path = require('path');

const contractPath = path.join(__dirname, 'Contract.sol');


function isContractFlattened(contractPath) {
  try {

    const source = fs.readFileSync(contractPath, 'utf8');
    
    const hasImports = source.split('\n').some(line => line.trim().startsWith('import'));
    
    if (hasImports) {
      console.log('The contract is not flattened. It contains import statements.');
    } else {
      console.log('The contract is flattened. It does not contain any import statements.');
    }
  } catch (error) {
    console.error('Error reading the contract file:', error);
  }
}

// Check if the contract is flattened
isContractFlattened(contractPath);
