
import { sanityClient } from "./sanityClient";
import { coursesQuery } from "./queries";
import { imageUrl } from "./imageURL";

function normalizeCourse(course) {
  return {
    id: course._id,
    title: course.title || "",
    slug: course.slug || "",
    description: course.description || "",
    image: course.coverImage
      ? imageUrl(course.coverImage)
          .width(900)
          .height(600)
          .fit("crop")
          .url()
      : null,
    duration: course.duration || "",
    formats: course.formats || [],
    learningOutcomes: course.learningOutcomes || [],
    displayOrder: course.displayOrder ?? 0,
  };
}

export async function getCourses() {
  const courses = await sanityClient.fetch(coursesQuery);
  return courses.map(normalizeCourse);
}
