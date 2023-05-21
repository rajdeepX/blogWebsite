const Article = () => {
  return (
    <article>
      <div className="img">
        <img
          src="https://techcrunch.com/wp-content/uploads/2016/12/electron-blockchain.jpg?w=730&crop=1"
          alt="image"
        />
      </div>
      <div className="text">
        <h2>
          Chainlink co-founder wants web3 to provide cryptographic guarantees to
          the world
        </h2>
        <p className="info">
          <a href="#">Rajdeep Dutta</a>
          <time>21st May 2023 08:40</time>
        </p>
        <p className="summary">
          Chainlink co-founder wants web3 to provide cryptographic guarantees to
          the world
        </p>
      </div>
    </article>
  );
};

export default Article;
