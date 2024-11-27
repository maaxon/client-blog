"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import cn from "classnames";

import { Button } from "@/components/button/";
import typography from "@/styles/typography.module.scss";
import { ContactFormData } from "@/types";
import { sendEmail } from "@/utils/send-email/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextArea } from "@maaxxon/client-blog-ui-kit";
import { FormInput } from "@maaxxon/client-blog-ui-kit";

import { schema } from "./form-schema";
import styles from "./style.module.scss";

export const ContactForm = () => {
  const t = useTranslations("ContactUsPage");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: ContactFormData) => {
    sendEmail(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <FormInput
          {...register("name")}
          type="text"
          placeholder={t("input.placeholder.name")}
          className={styles.input}
        />
        {!!errors.name && (
          <p className={cn(typography.body1, styles.error)} data-testid="name-error">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <FormInput
          {...register("email")}
          type="email"
          placeholder={t("input.placeholder.email")}
          className={styles.input}
        />
        {!!errors.email && (
          <p className={cn(typography.body1, styles.error)} data-testid="email-error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={cn(styles.inputContainer)}>
        <FormTextArea
          {...register("message")}
          placeholder={t("input.placeholder.message")}
          className={cn(styles.input)}
        />
        {!!errors.message && (
          <p className={cn(typography.body1, styles.error)} data-testid="message-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" className={styles.inputContainer}>
        {t("button.title")}
      </Button>
    </form>
  );
};
