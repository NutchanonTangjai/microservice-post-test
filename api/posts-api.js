const { db } = require("../databases/admin");
 
exports.posts = async (req, res) => {
  const postsRef = db.collection("posts");
  try {
    postsRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return res.status(201).json(data);
    });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};
 
exports.addPosts = async (req, res) => {
  try {
    const data = await db.collection("posts").add(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};
 
exports.findPost = async (req, res) => {
  try {
    const postRef = db.collection("posts");
    const snapshot = await postRef.where("title", "==", req.params.title).get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
 
    snapshot.forEach((doc) => {
      return res.status(200).json({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};
 
exports.updateData = async (req, res) => {
  if (!req.body) {
    console.error("No data to update");
    return;
  }
 
  const { title, body } = req.body;
 
  try {
    const postRef = db.collection("posts").doc(req.params.id);
    const result = await postRef.update({ title, body });
 
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};
 
exports.deletePost = async (req, res) => {
  if (!req.params.id) {
    console.error("No data to delete");
    return;
  }
  try {
    const postRef = db.collection("posts").doc(req.params.id);
    const result = await postRef.delete();
 
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};
