const Transactions = () => {
    return (
        <article className="block">
            <header>
                <h2>Make Transaction</h2>
            </header>
            <div className="mb-1">
                <form>
                    <input type="number" placeholder="Amount" name="deposit" />
                    <button>Deposit</button>
                </form>
            </div>
            <div>
                <form>
                    <input type="number" placeholder="Amount" name="withdraw" />
                    <button>Withdraw</button>
                </form>
            </div>
        </article>
    );
};

export default Transactions;
