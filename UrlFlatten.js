async function checkFlattenedContract(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contractText = await response.text();

        // Check for import statements
        if (/import\s+['"][^'"]+['"]\s*;/.test(contractText)) {
            throw new Error("Contract is not flattened: contains import statements.");
        }

        // Check for pragma solidity version
        const pragmaMatch = contractText.match(/pragma\s+solidity\s+([^;]+);/);
        if (!pragmaMatch) {
            throw new Error("Unable to determine Solidity compiler version.");
        }

        const compilerVersion = pragmaMatch[1].trim();

        console.log(`Contract is flattened and accepted. Solidity compiler version: ${compilerVersion}`);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

// Usage
const contractUrl = 'https://etherscan.io/address/0x7065866090eec380c2dbf53b485be53d16d87252#code#L1';
checkFlattenedContract(contractUrl);
