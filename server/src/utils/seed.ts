import { supabase } from "../database";
import { adminId } from "../routes/admin.routes";
import { ApiError } from "./ApiError";

const data = [
  {
    userName: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "984045698345",
    packageName: "premium",
    paymentStatus: "Clear",
    joinDate: "20/05/25",
  },
  {
    userName: "Michael Smith",
    email: "michael.s@example.com",
    phone: "9876543210",
    packageName: "elite",
    paymentStatus: "Pending",
    joinDate: "12/05/25",
  },
  {
    userName: "Emily Davis",
    email: "emily.d@example.com",
    phone: "9123456789",
    packageName: "basic",
    paymentStatus: "Clear",
    joinDate: "10/05/25",
  },
  {
    userName: "Jessica Wilson",
    email: "jessica.w@example.com",
    phone: "9456781234",
    packageName: "elite",
    paymentStatus: "Clear",
    joinDate: "10/05/25",
  },
  {
    userName: "David Brown",
    email: "david.b@example.com",
    phone: "9988776655",
    packageName: "premium",
    paymentStatus: "Pending",
    joinDate: "02/05/25",
  },
  {
    userName: "Olivia Martinez",
    email: "olivia.m@example.com",
    phone: "8765432109",
    packageName: "premium",
    paymentStatus: "Pending",
    joinDate: "20/04/25",
  },
  {
    userName: "James Anderson",
    email: "james.a@example.com",
    phone: "9876543211",
    packageName: "basic",
    paymentStatus: "Clear",
    joinDate: "18/04/25",
  },
  {
    userName: "Liam Thompson",
    email: "liam.t@example.com",
    phone: "7654321098",
    packageName: "elite",
    paymentStatus: "Clear",
    joinDate: "10/04/25",
  },
];

const fakeAnnouncements = [
  {
    id: "ann_123456",
    title: "Holiday Hours Update",
    content: "The gym will have special hours during the upcoming holiday weekend...",
    scheduledDate: "2025-05-01",
    status: "scheduled",
    type: "general",
  },
  {
    id: "ann_123457",
    title: "New Equipment Arriving",
    content: "We're excited to announce that new cardio equipment will be installed...",
    scheduledDate: "2025-05-10",
    status: "draft",
    type: "general",
  },
  {
    id: "ann_123458",
    title: "Emergency Closure",
    content: "Due to a water main break, the gym will be closed tomorrow for repairs...",
    scheduledDate: "2025-05-05",
    status: "scheduled",
    type: "important",
  },
  {
    id: "ann_123459",
    title: "Fitness Challenge Starting Soon",
    content: "Join our 30-day fitness challenge starting on May 15th...",
    scheduledDate: "2025-05-08",
    status: "draft",
    type: "event",
  },
];

//  Repeated Data entry
console.log("Seeding data...🌱");
const systemFire = async () => {
  const hasPassword = await Bun.password.hash("password123", {
    algorithm: "bcrypt",
  });

  const admin_id = await adminId();

  try {
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    data.forEach(async (user) => {
      let { error: insert_error } = await supabase!
        .from("users")
        .insert([
          {
            name: user.userName,
            email: user.email,
            password: hasPassword,
            phone: user.phone,
            join_date: new Date(),
            membership_type: user.packageName,
            admin_id,
          },
        ])
        .select();
    });
    console.log("User data seeded successfully");
  } catch (error) {
    console.error("Error from systemFire: ", error);
  }
};
const announcementFire = async () => {
  const hasPassword = await Bun.password.hash("password123", {
    algorithm: "bcrypt",
  });

  const admin_id = await adminId();

  try {
    if (!supabase) {
      throw new ApiError(400, "Database connection failed");
    }

    fakeAnnouncements.forEach(async (ann) => {
      let { error: insert_error } = await supabase!
        .from("notifications")
        .insert([
          {
            title: ann.title,
            message: ann.content,
            type: ann.type,
            notification_date: ann.scheduledDate,
            admin_id,
          },
        ])
        .select();
    });
    console.log("Announcement data seeded successfully");
  } catch (error) {
    console.error("Error from systemFire: ", error);
  }
};

systemFire();
announcementFire();
console.log("COMPLETE ...🌱");
