// prisma/seed.ts
import { PrismaClient, Role } from "../generated/prisma/default.js";
import { hashPassword } from "../lib/hashPassword.js";
const prisma = new PrismaClient();

async function main() {
  console.log("Starts seeding...");
  // Create Users
  const passwords = [
    "securepassword",
    "anotherpass",
    "pass123",
    "qwerty",
    "letmein",
  ];
  const hashedPasswords = await Promise.all(
    passwords.map((pw) => hashPassword(pw))
  );
  const users = await prisma.user.createMany({
    data: [
      { username: "johndoe", password: hashedPasswords[0], role: Role.ADMIN },
      { username: "janedoe", password: hashedPasswords[1], role: Role.USER },
      { username: "alice", password: hashedPasswords[2], role: Role.ADMIN },
      { username: "bob", password: hashedPasswords[3], role: Role.USER },
      { username: "charlie", password: hashedPasswords[4], role: Role.USER },
    ],
  });

  const userRecords = await prisma.user.findMany();

  // Map users to variables
  const [johndoe, janedoe, alice, bob, charlie] = userRecords;

  // Create Posts
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "First Post",
        content: "Welcome to the blog!",
        authorId: johndoe.id,
        published: true,
      },
      {
        title: "Tech News",
        content: "Latest in tech...",
        authorId: alice.id,
        published: true,
      },
      {
        title: "Unpublished Draft",
        content: "Not ready yet...",
        authorId: alice.id,
        published: false,
      },
      {
        title: "Bob’s Musings",
        content: "Thoughts about life.",
        authorId: bob.id,
        published: true,
      },
      {
        title: "Hidden Gems",
        content: "Cool stuff you missed.",
        authorId: johndoe.id,
        published: true,
      },
    ],
  });

  const postRecords = await prisma.post.findMany();

  // Create Comments
  await prisma.comment.createMany({
    data: [
      {
        content: "Nice post!",
        authorId: janedoe.id,
        postId: postRecords[0].id,
      },
      { content: "I agree!", authorId: bob.id, postId: postRecords[0].id },
      {
        content: "Interesting read.",
        authorId: charlie.id,
        postId: postRecords[1].id,
      },
      {
        content: "Needs more info.",
        authorId: janedoe.id,
        postId: postRecords[2].id,
      },
      {
        content: "This was helpful.",
        authorId: alice.id,
        postId: postRecords[3].id,
      },
      {
        content: "Loved this post!",
        authorId: charlie.id,
        postId: postRecords[4].id,
      },
      {
        content: "Thanks for sharing!",
        authorId: bob.id,
        postId: postRecords[4].id,
      },
    ],
  });
  console.log("Seeding has completed...!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
