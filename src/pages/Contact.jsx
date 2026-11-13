import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import ContactForm from "../components/contact/ContactForm";
import ContactFAQs from "../components/contact/ContactFAQ";
import CTASection from "../components/ui/CTASection";
import { useState, useMemo } from "react";
import { useCourses } from "../cms/useCourses";
import { useSearchParams } from "react-router-dom";
import { serviceGroups } from "../data/siteContent";
import { useContactPage } from "../cms/useContactPage";

export default function Contact() {
      const { contactPage, loading: pageLoading, error: pageError } = useContactPage();
      const [serviceGroupIdOverride, setServiceGroupId] = useState(null);
      const [serviceIdOverride, setServiceId] = useState(null);
      const [intentOverride, setIntent] = useState(null);
      const [interestTypeOverride, setInterestType] = useState(null);
      const [courseIdOverride, setCourseId] = useState(null);
    
      const [name, setName] = useState("");
      const [organization, setOrganization] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [message, setMessage] = useState("");
    
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState("");
      const [error, setError] = useState("");
    
      const [searchParams] = useSearchParams();
  
      const { courses, loading: coursesLoading, error: coursesError } = useCourses();
    
      const urlPrefill = useMemo(() => {
        const requestedType = searchParams.get("type");
        const requestedGroup = searchParams.get("group");
        const requestedService = searchParams.get("service");
    
        if (requestedType === "program") {
          const group = serviceGroups.find(
            (item) => item.id === requestedGroup
          );
    
          if (!group) return {};
    
          const service = group.areas.find(
            (item) => item.id === requestedService
          );
    
          return {
            interestType: "program",
            courseId: "",
            serviceGroupId: group.id,
            serviceId: service?.id ?? "",
            intent: "",
          };
        }
    
        const requestedCourse = searchParams.get("course");
    
        if (!requestedCourse) return {};
    
        const course = courses.find(
          (item) =>
            item.slug === requestedCourse || item.id === requestedCourse
        );
    
        if (!course) return {};
    
        return {
          interestType: "course",
          courseId: course.id,
          serviceGroupId: "",
          serviceId: "",
          intent: "demo",
        };
      }, [courses, searchParams]);
    
      // Use manual selections when present; otherwise use URL defaults.
      const interestType =
        interestTypeOverride ?? urlPrefill.interestType ?? "";
    
      const courseId =
        courseIdOverride ?? urlPrefill.courseId ?? "";
    
      const serviceGroupId =
        serviceGroupIdOverride ?? urlPrefill.serviceGroupId ?? "";
    
      const serviceId =
        serviceIdOverride ?? urlPrefill.serviceId ?? "";
    
      const intent = intentOverride ?? urlPrefill.intent ?? "";
    
      const selectedGroup = useMemo(
        () => serviceGroups.find((group) => group.id === serviceGroupId),
        [serviceGroupId]
      );
    
      const selectedCourse = useMemo(
      () => courses.find((course) => course.id === courseId),
      [courses, courseId]
    );
    
      const availableServices = useMemo(
        () => selectedGroup?.areas ?? [],
        [selectedGroup]
      );
    
      const selectedService = useMemo(
        () =>
          availableServices.find((service) => service.id === serviceId),
        [availableServices, serviceId]
      );
    
      const handleServiceGroupChange = (event) => {
      const value = event.target.value;
    
      setServiceGroupId(value);
      setServiceId("");
      setSuccess("");
      setError("");
    };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        setSuccess("");
        setError("");
    
    
        if (!interestType) {
          setError("Please select whether you're interested in Courses or Programs.");
          return;
        }
    
        if (!intent) {
          setError("Please tell us how you'd like to proceed.");
          return;
        }
    
        setLoading(true);
    
        const leadData = {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          organization: organization.trim(),
          message: message.trim(),
    
          serviceGroup:
            interestType === "program" ? selectedGroup?.title ?? "" : "",
    
          serviceId:
            interestType === "course"
              ? selectedCourse?.slug ?? ""
              : interestType === "program"
                ? serviceId
                : "",
    
          serviceTitle:
            interestType === "course"
              ? selectedCourse?.title ?? ""
              : interestType === "program"
                ? selectedService?.title ?? ""
                : "",
    
          intent,
        };
    
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8787"}/api/contact`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(leadData),
            }
          );
    
          const data = await response.json();
    
          if (!response.ok || !data?.success) {
            throw new Error(
              data?.error ||
                "We couldn't submit your request. Please try again."
            );
          }
    
          setSuccess(
            intent === "demo"
              ? "Your discovery call request has been received. We'll be in touch shortly."
              : "Your callback request has been received. We'll be in touch shortly."
          );
    
          // Reset form after successful submission
          setName("");
          setOrganization("");
          setEmail("");
          setPhone("");    
          setInterestType("");
          setCourseId("");
          setMessage("");
          setServiceGroupId("");
          setServiceId("");
          setIntent("");
        } catch (error) {
          console.error(error);
    
          setError(
            error.message ||
              "Something went wrong. Please try again."
          );
        } finally {
          setLoading(false);
        }
      };
      
      if (pageLoading) {
        return (
        <main className="academy-theme min-h-screen flex items-center justify-center">
            <p className="text-[var(--color-text-secondary)]">
                Loading Contact Page...
            </p>
          </main>
      );
    }

    if (pageError || !contactPage) {
      return (
        <main className="academy-theme min-h-screen flex items-center justify-center px-6">
          <p className="text-[var(--color-error)]">
              Unable to load Contact Page. Please try again later.
          </p>
        </main>
      );
    }
    const {finalCTA} = contactPage
    return (
        <main className="academy-theme">
            <ContactHero data={contactPage.hero}/>
            <ContactInformation data={contactPage.contactInformation}/>
            <ContactForm
                form={{
                    interestType,
                    setInterestType,
                    courseId,
                    setCourseId,
                    serviceGroupId,
                    setServiceGroupId,
                    serviceId,
                    setServiceId,
                    intent,
                    setIntent,
                    name,
                    setName,
                    organization,
                    setOrganization,
                    email,
                    setEmail,
                    phone,
                    setPhone,
                    message,
                    setMessage,
                    loading,
                    success,
                    error,
                    courses,
                    coursesLoading,
                    coursesError,
                    serviceGroups,
                    availableServices,
                    selectedCourse,
                    selectedGroup,
                    selectedService,
                    handleServiceGroupChange,
                    handleSubmit,
                    setSuccess,
                    setError,
                }}
            />
        <ContactFAQs data={contactPage.faqs}/>

        {/* Final CTA */}
        <CTASection
        eyebrow="We're Here to Help"
        title={finalCTA.heading}
        description={finalCTA.description}
        variant="warm"
        primaryLabel={finalCTA.primaryCTA}
        primaryTo="https://wa.me/917908466757?text=Hello%20Empowering%20Minds%2C%20I'd%20like%20help%20finding%20the%20right%20course%20or%20program."
        secondaryLabel={finalCTA.secondaryCTA}
        secondaryTo="/courses"
        />

        </main>
    )
}