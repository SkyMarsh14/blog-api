const Header = () => {
  return (
    <header>
      <div class="header-title">Blog Api</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
          <li>
            <a href="/posts">My Posts</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
          <li>
            <a href="/create-post">Write blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
