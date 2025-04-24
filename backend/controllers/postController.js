const postContoller = {
  allPosts: async (req, res) => {
    //Get posts from db.
    res.json({ message: "Welcome to posts route" });
  },
};

export default postContoller;
