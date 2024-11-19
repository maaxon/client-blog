"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import classNames from "classnames";

import { Button } from "@/components/button/";
import { FormInput } from "@/components/form-input";
import { FormTextArea } from "@/components/form-text-area";
import typography from "@/styles/typography.module.scss";
import { ContactFormData } from "@/types";
import { sendEmail } from "@/utils/send-email/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./contact-form.module.scss";
import { schema } from "./form-schema";

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
          <p className={classNames(typography.body1, styles.error)} data-testid="name-error">
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
          <p className={classNames(typography.body1, styles.error)} data-testid="email-error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={classNames(styles.inputContainer)}>
        <FormTextArea
          {...register("message")}
          placeholder={t("input.placeholder.message")}
          className={classNames(styles.input)}
        />
        {!!errors.message && (
          <p className={classNames(typography.body1, styles.error)} data-testid="message-error">
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
