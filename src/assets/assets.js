import { Rating } from "react-simple-star-rating";

export const dummy = [
  {
    courseId: "react-animations-101",
    title: "Mastering React Animations with GSAP & ScrollTrigger",
    instructor: "Ayan Roy",
    thumbnail: "https://img.youtube.com/vi/_hbvq1TuZs8/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=_hbvq1TuZs8",
    duration: "6h 30m",
    level: "Intermediate",
    price: 199,
    Rating: 5,
    description:
      "Learn how to create smooth, professional-grade animations in React using GSAP and ScrollTrigger. Build interactive UIs and bring your projects to life with hands-on examples.",
    enrolled: 1250,
    students: [
      { name: "Rahul Sharma", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Emily Carter", avatar: "https://i.pravatar.cc/150?img=2" }
    ],
    chapters: [
      {
        title: "Introduction to GSAP",
        video: "https://www.youtube.com/watch?v=_hbvq1TuZs8",
        description: "Overview of GSAP and why it’s powerful for React animations.",
        duration: "12m 45s"
      },
      {
        title: "ScrollTrigger Basics",
        video: "https://www.youtube.com/watch?v=aqL3bHMWn88",
        description: "Learn how ScrollTrigger works and how to create scroll-based animations.",
        duration: "18m 20s"
      },
      {
        title: "Building an Animated Landing Page",
        video: "https://www.youtube.com/watch?v=QETH5X1S4jA",
        description: "Step-by-step walkthrough of building a fully animated landing page in React.",
        duration: "35m 10s"
      }
    ],
    review: [
      "Great course! The instructor explained concepts clearly and provided practical examples.",
      "I loved the hands-on projects. They really helped me understand how to implement animations in my own React apps.",
      "The course content was well-structured and easy to follow. Highly recommend it!"
    ]
  },
  {
    courseId: "react-hook-form-advanced",
    title: "Advanced Form Handling in React",
    instructor: "Sara Kim",
    thumbnail: "https://img.youtube.com/vi/H63Pd_lXkeQ/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=H63Pd_lXkeQ",
    duration: "4h 15m",
    level: "Intermediate",
    price: 149,
    Rating: 4.5,
    description:
      "Master complex form handling in React with advanced techniques using React Hook Form. Learn validation, dynamic fields, error handling, and scalable patterns for production apps.",
    enrolled: 980,
    students: [
      { name: "Sophia Patel", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "James Anderson", avatar: "https://i.pravatar.cc/150?img=5" }
    ],
    chapters: [
      {
        title: "React Hook Form Setup",
        video: "https://www.youtube.com/watch?v=H63Pd_lXkeQ",
        description: "Set up React Hook Form and understand its core concepts.",
        duration: "15m 30s"
      },
      {
        title: "Custom Validation Rules",
        video: "https://www.youtube.com/watch?v=H1lmKnt5wGc",
        description: "Implement advanced custom validation logic for complex forms.",
        duration: "22m 10s"
      },
      {
        title: "Dynamic Fields & Error Handling",
        video: "https://www.youtube.com/watch?v=U4GSyVdFH9c",
        description: "Learn to handle forms with dynamic fields and intuitive error messages.",
        duration: "28m 40s"
      }
    ],
    review: [
      "The course was informative, but I expected more hands-on projects.",
      "Great explanations, but some topics felt rushed.",
      "I appreciated the real-world examples provided."
    ]
  },
  {
    courseId: "redux-toolkit-patterns",
    title: "Scalable State Management with Redux Toolkit",
    instructor: "Devon Blake",
    thumbnail: "https://img.youtube.com/vi/u3KlatzB7GM/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=u3KlatzB7GM",
    duration: "5h 40m",
    level: "Advanced",
    price: 249,
    Rating: 5,
    description:
      "Take your Redux skills to the next level by mastering Redux Toolkit patterns. Learn to build scalable, maintainable, and high-performance applications with best practices.",
    enrolled: 1450,
    students: [
      { name: "Olivia Brown", avatar: "https://i.pravatar.cc/150?img=7" },
      { name: "Ethan Walker", avatar: "https://i.pravatar.cc/150?img=8" }
    ],
    chapters: [
      {
        title: "Redux Toolkit Overview",
        video: "https://www.youtube.com/watch?v=u3KlatzB7GM",
        description: "Introduction to Redux Toolkit and why it simplifies Redux.",
        duration: "20m 15s"
      },
      {
        title: "Slices & Reducers",
        video: "https://www.youtube.com/watch?v=9zySeP5vH9c",
        description: "Learn to create slices, reducers, and actions with Redux Toolkit.",
        duration: "25m 00s"
      },
      {
        title: "Async Thunks & API Integration",
        video: "https://www.youtube.com/watch?v=93p3LxR9xfM",
        description: "Handle asynchronous calls with createAsyncThunk and manage API data.",
        duration: "32m 18s"
      }
    ],
    review: [
      "Excellent course! The concepts were explained clearly, and the examples were very helpful.",
      "I learned a lot about Redux patterns and best practices.",
      "The instructor was very knowledgeable and engaging."
    ]
  },
  {
    courseId: "scrollable-layouts-tailwind",
    title: "Bulletproof Scrollable Layouts with Tailwind & React",
    instructor: "Ayan Roy",
    thumbnail: "https://img.youtube.com/vi/RuhpLRAVvmM/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=RuhpLRAVvmM",
    duration: "3h 50m",
    level: "Intermediate",
    price: 199,
    Rating: 4.5,
    description:
      "Learn to design flawless scrollable layouts in React using Tailwind CSS. From sticky headers to infinite scrolling, master UI techniques that improve user experience.",
    enrolled: 1120,
    students: [
      { name: "Isabella Rossi", avatar: "https://i.pravatar.cc/150?img=10" },
      { name: "Arjun Verma", avatar: "https://i.pravatar.cc/150?img=11" }
    ],
    chapters: [
      {
        title: "Intro to Tailwind Layouts",
        video: "https://www.youtube.com/watch?v=RuhpLRAVvmM",
        description: "Learn the basics of Tailwind CSS layouts and responsive design.",
        duration: "10m 50s"
      },
      {
        title: "Scrollable Sections",
        video: "https://www.youtube.com/watch?v=pfaSUYaSgRo",
        description: "Implement scrollable sections and smooth scrolling behavior.",
        duration: "17m 15s"
      },
      {
        title: "Sticky Header & Footer",
        video: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
        description: "Build sticky headers and footers that stay in place while scrolling.",
        duration: "22m 35s"
      }
    ],
    review: [
      "Great course! The instructor explained concepts clearly and provided practical examples.",
      "I loved the hands-on projects. They really helped me understand how to implement animations in my own React apps.",
      "The course content was well-structured and easy to follow. Highly recommend it!"
    ]
  },
  {
    courseId: "minimalist-ui-design",
    title: "Minimalist UI Design for Developers",
    instructor: "Lena Zhao",
    thumbnail: "https://img.youtube.com/vi/brtXmd-demU/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=brtXmd-demU",
    duration: "2h 45m",
    level: "Beginner",
    price: 99,
    Rating: 4,
    description:
      "Discover the principles of minimalist design and learn how to craft clean, modern, and user-friendly UIs. Perfect for developers who want to enhance their design skills.",
    enrolled: 860,
    students: [
      { name: "Noah Wilson", avatar: "https://i.pravatar.cc/150?img=13" },
      { name: "Aarav Gupta", avatar: "https://i.pravatar.cc/150?img=14" }
    ],
    chapters: [
      {
        title: "What is Minimalist Design?",
        video: "https://www.youtube.com/watch?v=brtXmd-demU",
        description: "Introduction to minimalist design principles and why they matter.",
        duration: "8m 50s"
      },
      {
        title: "Typography & White Space",
        video: "https://www.youtube.com/watch?v=pCa1k6umB4c",
        description: "Learn how to use typography and spacing effectively in minimalist design.",
        duration: "19m 40s"
      },
      {
        title: "Designing Clean Layouts",
        video: "https://www.youtube.com/watch?v=F3cQK5u5Ue4",
        description: "Practical tips for building clean, modern layouts in your projects.",
        duration: "21m 05s"
      }
    ],
    review: [
      "A solid introduction to UI design principles. The examples were relevant and easy to follow.",
      "I appreciated the focus on practical applications rather than just theory.",
      "The course could benefit from more advanced topics."
    ]
  },
  {
    courseId: "java-algorithms-edge-cases",
    title: "Java Algorithms: Edge Cases & Optimal Solutions",
    instructor: "Ravi Mehta",
    thumbnail: "https://img.youtube.com/vi/GeO3HQNnpoE/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=GeO3HQNnpoE",
    duration: "6h 10m",
    level: "Advanced",
    price: 299,
    Rating: 5,
    description:
      "Deep dive into advanced Java algorithms with a focus on edge cases and optimization. Build problem-solving skills and learn how to write efficient, production-ready code.",
    enrolled: 990,
    students: [
      { name: "William Chen", avatar: "https://i.pravatar.cc/150?img=16" },
      { name: "Emma Davis", avatar: "https://i.pravatar.cc/150?img=17" }
    ],
    chapters: [
      {
        title: "Algorithm Complexity Basics",
        video: "https://www.youtube.com/watch?v=GeO3HQNnpoE",
        description: "Understand Big O notation and analyze algorithm efficiency.",
        duration: "16m 40s"
      },
      {
        title: "Sorting Edge Cases",
        video: "https://www.youtube.com/watch?v=kgBjXUE_Nwc",
        description: "Explore sorting algorithms with tricky inputs and optimizations.",
        duration: "23m 25s"
      },
      {
        title: "Graph Algorithms Deep Dive",
        video: "https://www.youtube.com/watch?v=gGlMSe7nC98",
        description: "Solve complex problems using graph traversal and shortest path algorithms.",
        duration: "29m 50s"
      }
    ],
    review: [
      "An in-depth look at Java algorithms, with a focus on edge cases and performance optimization.",
      "The examples were relevant and helped solidify my understanding of complex topics.",
      "I would recommend this course to anyone looking to deepen their Java knowledge."
    ]
  },
  {
    courseId: "python-inheritance-debugging",
    title: "Debugging Python Inheritance Like a Pro",
    instructor: "Ayan Roy",
    thumbnail: "https://img.youtube.com/vi/an59YHkdK9A/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=an59YHkdK9A",
    duration: "3h 20m",
    level: "Intermediate",
    price: 199,
    Rating: 4,
    description:
      "Master debugging techniques for Python inheritance issues. Learn to identify, troubleshoot, and fix class hierarchy problems with practical debugging strategies.",
    enrolled: 730,
    students: [
      { name: "Ava Johnson", avatar: "https://i.pravatar.cc/150?img=19" },
      { name: "Mohammed Ali", avatar: "https://i.pravatar.cc/150?img=20" }
    ],
    chapters: [
      {
        title: "Understanding Inheritance",
        video: "https://www.youtube.com/watch?v=an59YHkdK9A",
        description: "Learn the fundamentals of inheritance in Python classes.",
        duration: "13m 20s"
      },
      {
        title: "Common Inheritance Errors",
        video: "https://www.youtube.com/watch?v=-ari4LR9Ay0",
        description: "Identify common mistakes and pitfalls in Python inheritance.",
        duration: "17m 55s"
      },
      {
        title: "Debugging Multiple Inheritance",
        video: "https://www.youtube.com/watch?v=RSl87lqOXDE",
        description: "Master techniques for debugging multiple inheritance and MRO issues.",
        duration: "26m 35s"
      }
    ],
    review: [
      "A comprehensive guide to debugging inheritance issues in Python. The examples were clear and easy to follow.",
      "I appreciated the focus on practical debugging techniques.",
      "The course could benefit from more real-world examples."
    ]
  },
  {
    courseId: "ux-polish-react-forms",
    title: "UX Polish for React Forms",
    instructor: "Maya Singh",
    thumbnail: "https://img.youtube.com/vi/QRNcWFFVs9o/maxresdefault.jpg",
    promoVideo: "https://www.youtube.com/watch?v=QRNcWFFVs9o",
    duration: "2h 30m",
    level: "Beginner",
    price: 99,
    Rating: 4,
    description:
      "Improve the user experience of your React forms with modern UX techniques. Learn about accessibility, error handling, and intuitive design patterns for better engagement.",
    enrolled: 650,
    students: [
      { name: "David Park", avatar: "https://i.pravatar.cc/150?img=22" },
      { name: "Chloe Nguyen", avatar: "https://i.pravatar.cc/150?img=23" }
    ],
    chapters: [
      {
        title: "Why UX Matters in Forms",
        video: "https://www.youtube.com/watch?v=QRNcWFFVs9o",
        description: "Introduction to the importance of UX in form design.",
        duration: "9m 30s"
      },
      {
        title: "Form Accessibility",
        video: "https://www.youtube.com/watch?v=9HDEHj2yzew",
        description: "Make your forms accessible and user-friendly for all users.",
        duration: "18m 40s"
      },
      {
        title: "Error States & Feedback",
        video: "https://www.youtube.com/watch?v=7JtLHJbm0kA",
        description: "Design intuitive error states and helpful feedback for better UX.",
        duration: "20m 25s"
      }
    ],
    review: [
      "A solid introduction to UI design principles. The examples were relevant and easy to follow.",
      "I appreciated the focus on practical applications rather than just theory.",
      "The course could benefit from more advanced topics."
    ]
  }
];






export const testimonials = [
  {
    name: "Samantha Lee",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    feedback: "Working with this team was a game-changer. The attention to detail and user empathy blew me away."
  },

  {
    name: "Priya Nair",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5.0,
    feedback: "I felt heard and valued throughout the process. The final product truly reflected our users’ needs."
  },
  {
    name: "Daniel Cho",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    feedback: "Their animation work added a layer of polish that elevated our brand presence significantly."
  },
  {
    name: "Fatima Alvi",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    feedback: "Insightful, collaborative, and always pushing for clarity. Loved the minimalist design approach."
  }
];