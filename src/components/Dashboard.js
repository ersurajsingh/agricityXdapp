import React, { useState, useEffect } from 'react';
import { ethers, formatEther } from 'ethers';
import { productListingContract, subsidyDisbursementContract, lendingMechanismContract } from '../blockchain';
import ListProduct from './ListProduct';

const Dashboard = ({ signer }) => {
  const [products, setProducts] = useState([]);
  const [subsidies, setSubsidies] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    if (signer) {
      loadBlockchainData();
    }
  }, [signer]);

  const loadBlockchainData = async () => {
    // Load products
    const productCount = await productListingContract.productCount();
    const products = [];
    for (let i = 1; i <= productCount; i++) {
      const product = await productListingContract.products(i);
      products.push(product);
    }
    setProducts(products);

    // Load subsidies
    const farmerCount = await subsidyDisbursementContract.farmerCount();
    const subsidies = [];
    for (let i = 1; i <= farmerCount; i++) {
      const farmer = await subsidyDisbursementContract.farmers(i);
      subsidies.push(farmer);
    }
    setSubsidies(subsidies);

    // Load loans
    const loanCount = await lendingMechanismContract.loanCount();
    const loans = [];
    for (let i = 1; i <= loanCount; i++) {
      const loan = await lendingMechanismContract.loans(i);
      loans.push(loan);
    }
    setLoans(loans);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ListProduct />
      <h3>Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {ethers.utils.formatEther(product.price)} ETH</li>
        ))}
      </ul>
      <h3>Subsidies</h3>
      <ul>
        {subsidies.map((subsidy, index) => (
          <li key={index}>{subsidy.farmerAddress} - {ethers.utils.formatEther(subsidy.subsidyAmount)} ETH</li>
        ))}
      </ul>
      <h3>Loans</h3>
      <ul>
        {loans.map((loan, index) => (
          <li key={index}>{loan.borrower} - {ethers.utils.formatEther(loan.amount)} ETH</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
