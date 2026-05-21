"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactProps {
  isArabic: boolean;
}

type FormStep = 1 | 2 | 3;

export default function Contact({ isArabic }: ContactProps) {
  const [step, setStep] = useState<FormStep>(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [projectScale, setProjectScale] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: "concrete", name: isArabic ? "الهياكل الخرسانية" : "Concrete Structures" },
    { id: "finishing", name: isArabic ? "التشطيبات الراقية" : "Architectural Finishing" },
    { id: "design", name: isArabic ? "التصميم المعماري" : "Architectural Design" },
    { id: "mep", name: isArabic ? "الأنظمة الميكانيكية والكهربائية (HVAC/إطفاء)" : "MEP Systems (HVAC/Fire/Plumbing)" },
  ];

  const scales = [
    { id: "residential", name: isArabic ? "فيلا سكنية فاخرة" : "Luxury Residential Estate" },
    { id: "commercial", name: isArabic ? "مجمع / مبنى تجاري" : "Commercial Complex" },
    { id: "industrial", name: isArabic ? "مستودع / منشأة صناعية" : "Industrial Infrastructure" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const getWhatsAppURL = () => {
    const text = isArabic
      ? `مرحباً شركة جلف إيفينتو، لقد قمت بتعبئة مخطط المشروع عبر الموقع للتواصل معي:
الاسم: ${name}
الهاتف: ${phone}
نوع الخدمة: ${selectedService}
حجم المشروع: ${projectScale}`
      : `Hello Gulf Evento, I have completed your luxury project planner online:
Name: ${name}
Phone: ${phone}
Service: ${selectedService}
Scale: ${projectScale}`;
    return `https://wa.me/966507506633?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-cream text-charcoal relative overflow-hidden"
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {/* Background Radial Light */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Inquiries / HQ Address */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-heading font-semibold tracking-widest text-accent uppercase mb-3">
              {isArabic ? "تواصل مباشر ٢٤/٧" : "Direct Inquiries"}
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary mb-8 leading-tight text-underline-gold">
              {isArabic ? "اتصل بنا الآن" : "Connect with Us"}
            </h2>
            <p className="text-charcoal/70 font-light text-sm sm:text-base leading-relaxed mb-10 text-left">
              {isArabic
                ? "ابدأ مناقشة فخامة مشروعك القادم اليوم. تواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني أو تفضل بزيارة مكتبنا الرئيسي بمدينة الجبيل."
                : "Initiate your premium architectural development today. Connect directly with our Jubail engineering headquarters via phone, messaging, or email."}
            </p>

            {/* Direct Details Grid */}
            <div className="flex flex-col gap-6 w-full text-charcoal">
              {/* HQ Phone */}
              <a
                href="tel:0136647813"
                className="flex items-center gap-4 group p-4 border border-accent/10 hover:border-primary/40 bg-white transition-colors rounded-2xl w-full shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-heading font-semibold tracking-widest text-charcoal/50 uppercase">
                    {isArabic ? "الهاتف الرئيسي للمكتب" : "Jubail Office Landline"}
                  </span>
                  <span className="text-base font-bold text-charcoal group-hover:text-primary transition-colors">
                    013-6647813
                  </span>
                </div>
              </a>

              {/* Direct WhatsApp */}
              <a
                href="https://wa.me/966507506633"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 border border-accent/10 hover:border-emerald-500/40 bg-white transition-colors rounded-2xl w-full shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageCircle size={16} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-heading font-semibold tracking-widest text-charcoal/50 uppercase">
                    {isArabic ? "محادثة مباشرة واتساب" : "Direct WhatsApp Liaison"}
                  </span>
                  <span className="text-base font-bold text-charcoal group-hover:text-emerald-500 transition-colors">
                    +966 50 750 6633
                  </span>
                </div>
              </a>

              {/* HQ Location */}
              <div className="flex items-center gap-4 p-4 border border-accent/10 bg-white rounded-2xl w-full shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-heading font-semibold tracking-widest text-charcoal/50 uppercase">
                    {isArabic ? "المقر الرئيسي" : "Headquarters"}
                  </span>
                  <span className="text-sm text-charcoal font-light">
                    {isArabic
                      ? "مدينة الجبيل، المنطقة الشرقية، المملكة العربية السعودية"
                      : "Al Jubail, Eastern Province, Saudi Arabia"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Planner Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-accent/10 rounded-3xl p-8 sm:p-12 shadow-md relative">
              {/* Radial Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col min-h-[380px] justify-between">
                    <div>
                      {/* Form Header Info */}
                      <div className="flex justify-between items-center mb-8 border-b border-accent/10 pb-4">
                        <span className="font-heading font-bold text-sm text-primary uppercase tracking-widest">
                          {isArabic ? "مخطط المشروع الفاخر" : "Luxury Project Planner"}
                        </span>
                        <span className="text-xs font-semibold text-charcoal/40">
                          {isArabic ? `الخطوة ${step} من ٣` : `Step ${step} of 3`}
                        </span>
                      </div>

                      {/* Step Contents */}
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col gap-6"
                          >
                            <h3 className="font-heading text-lg font-bold text-charcoal uppercase tracking-wider mb-2">
                              {isArabic ? "١. اختر نوع الخدمة الهندسية المطلوبة" : "1. Select Engineering Domain"}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {services.map((srv) => (
                                <button
                                  type="button"
                                  key={srv.id}
                                  onClick={() => setSelectedService(srv.name)}
                                  className={cn(
                                    "p-4 border text-left rounded-xl transition-all duration-300 font-heading text-xs uppercase tracking-wider",
                                    selectedService === srv.name
                                      ? "border-primary bg-primary/5 text-primary font-bold shadow-sm"
                                      : "border-accent/10 bg-cream text-charcoal hover:border-primary/30"
                                  )}
                                >
                                  {srv.name}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col gap-6"
                          >
                            <h3 className="font-heading text-lg font-bold text-charcoal uppercase tracking-wider mb-2">
                              {isArabic ? "٢. حدد نطاق وحجم المشروع" : "2. Declare Project Type & Scale"}
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                              {scales.map((scl) => (
                                <button
                                  type="button"
                                  key={scl.id}
                                  onClick={() => setProjectScale(scl.name)}
                                  className={cn(
                                    "p-4 border text-left rounded-xl transition-all duration-300 font-heading text-xs uppercase tracking-wider",
                                    projectScale === scl.name
                                      ? "border-primary bg-primary/5 text-primary font-bold shadow-sm"
                                      : "border-accent/10 bg-cream text-charcoal hover:border-primary/30"
                                  )}
                                >
                                  {scl.name}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col gap-5"
                          >
                            <h3 className="font-heading text-lg font-bold text-charcoal uppercase tracking-wider mb-2">
                              {isArabic ? "٣. قم بتعبئة بياناتك الشخصية" : "3. Complete Personal Information"}
                            </h3>
                            <div className="flex flex-col gap-4">
                              <input
                                required
                                type="text"
                                placeholder={isArabic ? "الاسم الكريم بالكامل" : "Noble Full Name"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-cream border border-accent/20 px-4 py-3 rounded-xl focus:border-primary focus:bg-white outline-none text-charcoal text-sm transition-colors placeholder:text-charcoal/40"
                              />
                              <input
                                required
                                type="email"
                                placeholder={isArabic ? "البريد الإلكتروني" : "Email Address"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-cream border border-accent/20 px-4 py-3 rounded-xl focus:border-primary focus:bg-white outline-none text-charcoal text-sm transition-colors placeholder:text-charcoal/40"
                              />
                              <input
                                type="tel"
                                placeholder={isArabic ? "رقم الجوال (اختياري)" : "Phone Number (Optional)"}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-cream border border-accent/20 px-4 py-3 rounded-xl focus:border-primary focus:bg-white outline-none text-charcoal text-sm transition-colors placeholder:text-charcoal/40"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="flex justify-between items-center mt-12 pt-6 border-t border-accent/10">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={() => setStep((s) => (s - 1) as FormStep)}
                          className="flex items-center gap-2 border border-accent/20 text-charcoal/60 px-5 py-2 hover:border-accent hover:text-accent transition-colors font-heading font-semibold text-xs tracking-wider uppercase bg-white rounded-lg"
                        >
                          <ChevronLeft size={14} />
                          {isArabic ? "السابق" : "Back"}
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <button
                          type="button"
                          disabled={step === 1 ? !selectedService : !projectScale}
                          onClick={() => setStep((s) => (s + 1) as FormStep)}
                          className={cn(
                            "flex items-center gap-2 px-6 py-2.5 font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300",
                            (step === 1 ? selectedService : projectScale)
                              ? "bg-primary text-cream shadow-lg hover:shadow-primary/20 hover:bg-primary/95"
                              : "bg-charcoal/5 text-charcoal/30 cursor-not-allowed"
                          )}
                        >
                          {isArabic ? "التالي" : "Next"}
                          <ChevronRight size={14} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!name || !email}
                          className={cn(
                            "flex items-center gap-2 px-8 py-3.5 font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300",
                            name && email
                              ? "bg-primary text-cream border border-primary hover:bg-transparent hover:text-primary shadow-xl shadow-primary/10 cursor-pointer"
                              : "bg-charcoal/5 text-charcoal/30 cursor-not-allowed border border-transparent"
                          )}
                        >
                          {isArabic ? "إرسال الطلب الهيكلي" : "Submit Structural Request"}
                          <Send size={12} />
                        </button>
                      )}
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10 min-h-[380px]"
                  >
                    <CheckCircle2 size={56} className="text-primary mb-6 animate-bounce" />
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 uppercase tracking-wide">
                      {isArabic ? "تم استلام طلبك بنجاح" : "Structural Planner Received"}
                    </h3>
                    <p className="text-charcoal/70 max-w-md font-light text-sm sm:text-base mb-8">
                      {isArabic
                        ? `شكراً لك يا ${name}. لقد قمنا بتسجيل طلبك لخدمات (${selectedService}). للتواصل المباشر والسريع، يمكنك إرسال الطلب فوراً عبر واتساب المكتبي.`
                        : `Thank you, ${name}. We have registered your request for ${selectedService}. For instantaneous support, you may launch your details directly into our Jubail WhatsApp hub.`}
                    </p>

                    <div className="flex flex-col gap-3 w-full max-w-sm">
                      <a
                        href={getWhatsAppURL()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-cream font-heading font-semibold text-xs tracking-wider uppercase py-3.5 rounded-xl transition-all duration-300"
                      >
                        <MessageCircle size={15} />
                        {isArabic ? "أرسل التفاصيل فوراً عبر واتساب" : "Launch WhatsApp Direct"}
                      </a>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setStep(1);
                          setName("");
                          setEmail("");
                          setPhone("");
                          setSelectedService("");
                          setProjectScale("");
                        }}
                        className="text-xs font-semibold text-charcoal/40 hover:text-primary transition-colors underline"
                      >
                        {isArabic ? "إنشاء طلب جديد" : "Configure Another Project"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
