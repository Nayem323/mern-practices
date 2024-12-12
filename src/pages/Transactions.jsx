import { useEffect, useState } from "react";

const accountId = 2;

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState("");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        getTransactions();
    }, [filter]);

    useEffect(() => {
        fetch(`http://localhost:3000/balance?account_id=${accountId}`)
            .then((response) => response.json())
            .then((data) => setBalance(data[0]));
    });

    const filterOption = filter ? `type=${filter}` : "";

    const getTransactions = async () => {
        const response = await fetch(
            `http://localhost:3000/transactions?_sort=id&_order=desc&account_id=${accountId}&${filterOption}`
        );
        const data = await response.json();
        setTransactions(data);
    };
    return (
        <>
            <h2 className="pb-1">All Transactions</h2>
            <select
                className="mb-2"
                name="filter"
                value={filter}
                onChange={(e) => {
                    setFilter(e.target.value);
                }}
            >
                <option value="">All</option>
                <option value="Deposit">Deposit</option>
                <option value="Withdraw">Withdraw</option>
            </select>
            <table className="width-100">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions?.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.date}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2">Balance</td>
                        <td>${balance?.amount ? balance.amount : "0"}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Transactions;
