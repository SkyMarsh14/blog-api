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
  await prisma.user.createMany({
    data: [
      { username: "johndoe", password: hashedPasswords[0], role: Role.ADMIN },
      { username: "janedoe", password: hashedPasswords[1], role: Role.USER },
      { username: "alice", password: hashedPasswords[2], role: Role.ADMIN },
      { username: "bob", password: hashedPasswords[3], role: Role.USER },
      { username: "charlie", password: hashedPasswords[4], role: Role.USER },
    ],
  });

  const userRecords = await prisma.user.findMany();
  const [johndoe, janedoe, alice, bob, charlie] = userRecords;

  // Create Posts
  await prisma.post.createMany({
    data: [
      {
        title: "First Post",
        content:
          "Welcome to the blog! We are excited to start sharing stories, updates, and insights with our community. Stay tuned!",
        authorId: johndoe.id,
        published: true,
      },
      {
        title: "Tech News",
        content:
          "Latest in tech: AI advancements, the rise of Web3, and how quantum computing is reshaping cybersecurity.",
        authorId: alice.id,
        published: true,
      },
      {
        title: "Unpublished Draft",
        content:
          "This is an early draft of an upcoming article on the challenges of remote work in a globalized world. Still gathering thoughts...",
        authorId: alice.id,
        published: false,
      },
      {
        title: "Bob’s Musings",
        content:
          "Life has its ups and downs, and sometimes the best thing to do is write about them. Here are my thoughts after a week of reflection.",
        authorId: bob.id,
        published: true,
      },
      {
        title: "Hidden Gems",
        content:
          "From obscure tech tools to indie games and underground music artists, here’s a curated list of cool stuff you might’ve missed.",
        authorId: johndoe.id,
        published: true,
      },
      {
        title: "Frontend Trends 2025",
        content:
          "What's hot in frontend this year? Think server components, resumable hydration, and design systems that scale.",
        authorId: alice.id,
        published: true,
      },
      {
        title: "Why I Switched to Linux",
        content:
          "After years of using Windows, I decided to make the jump to Linux. Here's my honest experience and why I’m not looking back.",
        authorId: charlie.id,
        published: true,
      },
      {
        title: "Photography Tips for Beginners",
        content:
          "Learn how to shoot better photos using natural light, basic composition rules, and affordable gear that won’t break the bank.",
        authorId: janedoe.id,
        published: true,
      },
      {
        title: "How to Stay Productive as a Remote Worker",
        content:
          "Working remotely has its perks—but distractions are real. Here are 10 tips I use to stay on top of my game.",
        authorId: bob.id,
        published: true,
      },
      {
        title: "Book Review: 'Deep Work' by Cal Newport",
        content:
          "An insightful look into focused work in a world full of distractions. Here’s what I learned and how I’m applying it daily.",
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
      {
        content: "I agree!",
        authorId: bob.id,
        postId: postRecords[0].id,
      },
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
      {
        content: "Super informative. Thanks!",
        authorId: charlie.id,
        postId: postRecords[5].id,
      },
      {
        content: "I've had the same experience with Linux. Great write-up.",
        authorId: alice.id,
        postId: postRecords[6].id,
      },
      {
        content:
          "This is exactly what I needed to improve my shots. Thank you!",
        authorId: bob.id,
        postId: postRecords[7].id,
      },
      {
        content: "These tips are gold. Remote work is hard without structure.",
        authorId: johndoe.id,
        postId: postRecords[8].id,
      },
      {
        content: "I loved 'Deep Work' too! Cal Newport changed the way I work.",
        authorId: janedoe.id,
        postId: postRecords[9].id,
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
