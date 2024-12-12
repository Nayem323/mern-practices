const AccountInfo = ({ title, data, dataType }) => {
    return (
        <article className="block">
            <header>
                <h2>{title}</h2>
            </header>
            {dataType === "info" && <AccountDetails data={data} />}
            {dataType === "balance" && <Balance data={data} />}
            {dataType === "transactions" && <Transactions data={data} />}
            {dataType === "actions" && (
                <>
                    <div className="mb-1">
                        <input
                            type="number"
                            placeholder="Amount"
                            name="deposit"
                        />
                        <button>Deposit</button>
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Amount"
                            name="withdraw"
                        />
                        <button>Withdraw</button>
                    </div>
                </>
            )}
        </article>
    );
};

const AccountDetails = ({ data }) => {
    return (
        <div>
            <p>Account Name: {data.account_name}</p>
            <p>Account Number: {data.account_number}</p>
            <p>Account Type: {data.account_type}</p>
        </div>
    );
};

const Balance = ({ data }) => {
    return (
        <div>
            <p>Current Balance: ${data?.amount ? data.amount : 0}</p>
        </div>
    );
};

const Transactions = ({ data }) => {
    return (
        <>
            <ul>
                {data?.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.type}: ${transaction.amount} on -{" "}
                        {transaction.date}
                    </li>
                ))}
            </ul>
            {data?.length ? (
                <footer>
                    <a href="#">See More</a>
                </footer>
            ) : (
                <p>No transactions yet</p>
            )}
        </>
    );
};

export default AccountInfo;
