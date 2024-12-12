import { useEffect, useState } from "react";
import AccountInfo from "../components/AccountInfo";
import { Link } from "react-router";

const accountId = 2;

const Home = () => {
    const [accountDetails, setAccountDetails] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const [depositAmount, setDepositAmount] = useState("");
    const [withdrawAmount, setWithdrawAmount] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/account-details/" + accountId)
            .then((response) => response.json())
            .then((data) => setAccountDetails(data));
    }, []);

    useEffect(() => {
        getBalance();
    }, []);

    useEffect(() => {
        getTransactions();
    }, []);

    const getBalance = async () => {
        const response = await fetch(
            "http://localhost:3000/balance?account_id=" + accountId
        );
        const data = await response.json();
        setBalance(data[0]);
    };

    const updateBalance = async (amount) => {
        await fetch("http://localhost:3000/balance/" + accountId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...balance, amount: amount }),
        });
        await getBalance();
    };

    const getTransactions = async () => {
        const response = await fetch(
            "http://localhost:3000/transactions?_limit=3&_sort=id&_order=desc&account_id=" +
                accountId
        );
        const data = await response.json();
        setTransactions(data);
    };

    const handleDeposit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                account_id: accountId,
                amount: parseInt(depositAmount),
                type: "Deposit",
                date: new Date().toLocaleDateString("en-CA"),
            }),
        });
        setDepositAmount("");
        await updateBalance(balance.amount + parseInt(depositAmount));
        await getTransactions();
    };

    const handleWithdraw = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                account_id: accountId,
                amount: parseInt(withdrawAmount),
                type: "Withdraw",
                date: new Date().toLocaleDateString("en-CA"),
            }),
        });
        setWithdrawAmount("");
        await updateBalance(balance.amount - parseInt(withdrawAmount));
        await getTransactions();
    };

    return (
        <>
            <div className="flex pb-1">
                <AccountInfo
                    title="Account Details"
                    data={accountDetails}
                    dataType="info"
                />
                <AccountInfo
                    title="Balance"
                    data={balance}
                    dataType="balance"
                />
            </div>
            <div className="flex pb-1">
                <AccountInfo
                    title="Latest Transactions"
                    data={transactions}
                    dataType="transactions"
                />
                {/* <AccountInfo title="Make Transaction" dataType="actions" /> */}
                <article className="block">
                    <header>
                        <h2>Make Transaction</h2>
                    </header>
                    <div className="mb-1">
                        <form onSubmit={handleDeposit}>
                            <input
                                type="number"
                                placeholder="Amount"
                                name="deposit"
                                value={depositAmount}
                                min="1"
                                onChange={(e) =>
                                    setDepositAmount(e.target.value)
                                }
                            />
                            <button type="submit">Deposit</button>
                        </form>
                    </div>
                    <div>
                        <form onSubmit={handleWithdraw}>
                            <input
                                type="number"
                                placeholder="Amount"
                                name="withdraw"
                                value={withdrawAmount}
                                min="1"
                                onChange={(e) =>
                                    setWithdrawAmount(e.target.value)
                                }
                            />
                            <button type="submit">Withdraw</button>
                        </form>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Home;
