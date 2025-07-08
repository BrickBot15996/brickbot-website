import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "../../components/animations";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Box from "../../components/brick-box";

export default function FAQ() {
  const t = useTranslations("Home.FAQ");
  const [isExpanded, setIsExpanded] = useState<number>(-1);

  return (
    <div className="flex flex-col items-start justify-center space-y-[var(--md-space-y)] mt-[var(--sm-space-y)]">
      <h2 className="mb-[var(--xl-space-y)]">FAQ</h2>
      <Question
        question={t("0.Question")}
        answer={[
          <p key="0">{t("0.Answer.paragraph0")}</p>,
          <p key="1">
            {t.rich("0.Answer.paragraph1", {
              ftc: (chunks) => (
                <Link
                  href="https://www.firstinspires.org/robotics/ftc"
                  target="_blank"
                  className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>,
          <p key="2">
            {t.rich("0.Answer.paragraph2", {
              natie: (chunks) => (
                <Link
                  href="https://natieprineducatie.ro/"
                  target="_blank"
                  className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {chunks}
                </Link>
              ),
              brd: (chunks) => (
                <Link
                  href="https://www.brd.ro/"
                  target="_blank"
                  className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>,
        ]}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        index={0}
      />
      <Question
        question={t("1.Question")}
        answer={[
          <p key="0">{t("1.Answer.paragraph0")}</p>,
          <p key="1">{t("1.Answer.paragraph1")}</p>,
        ]}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        index={1}
      />
      <Question
        question={t("2.Question")}
        answer={[
          <p key="0">
            {t.rich("2.Answer.paragraph0", {
              cnu: (chunks) => (
                <Link
                  href="http://cnu.lufo.ro/"
                  target="_blank"
                  className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>,
          <p key="1">{t("2.Answer.paragraph1")}</p>,
          <p key="2">
            {t.rich("2.Answer.paragraph2", {
              apply: (chunks) => (
                <Link
                  href="/apply"
                  target="_blank"
                  className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>,
        ]}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        index={2}
      />
      <Question
        question={t("3.Question")}
        answer={[
          <p key="0">{t("3.Answer.paragraph0")}</p>,
          <p key="1">
            {t.rich("3.Answer.paragraph1", {
              supportUs: (chunks) => (
                <Link
                  href="/support-us"
                  className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>,
        ]}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        index={3}
      />
    </div>
  );
}

function Question({
  question,
  answer,
  isExpanded,
  setIsExpanded,
  index,
}: {
  question: string;
  answer: ReactNode[];
  isExpanded: number;
  setIsExpanded: Dispatch<SetStateAction<number>>;
  index: number;
}) {
  const [borderRadius, setBorderRadius] = useState<string>("2rem");

  useEffect(() => {
    if (window.innerWidth >= 1024) setBorderRadius("2rem");
    else if (window.innerWidth >= 768) setBorderRadius("1.5rem");
    else setBorderRadius("1rem");
  }, [setBorderRadius]);

  return (
    <AnimationWhenInView
      variants={defaultFadeIn}
      className="w-full h-auto select-none"
    >
      <div
        className="w-full cursor-pointer"
        onClick={() => {
          if (isExpanded == index) setIsExpanded(-1);
          else setIsExpanded(index);
        }}
      >
        <Box
          borderRadius={borderRadius}
          className="flex flex-col items-start justify-start w-full h-full px-[var(--md-space-x)] lg:px-[var(--sm-space-y)] space-x-[var(--sm-space-x)]"
        >
          <div className="flex flex-row w-full my-[var(--md-space-y)] lg:my-[var(--sm-space-y)] items-center justify-center">
            <h3
              className="mr-auto"
              style={{ color: "var(--alternate-text)" }}
            >
              {question}
            </h3>
            <motion.div
              animate={{ rotate: isExpanded === index ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="ml-auto flex items-center justify-center h-[1.5rem] md:h-[1.7rem] lg:h-[2rem] xl:h-[2.2rem] w-auto aspect-square"
            >
              <IoIosArrowDown className="h-full w-full fill-[var(--alternate-text)]" />
            </motion.div>
          </div>
          <AnimatePresence>
            {isExpanded === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden w-full"
              >
                <div className="flex flex-col space-y-[var(--sm-space-y)] mb-[var(--sm-space-y)]">
                  {answer.map((paragraph, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full lg:w-[95%] xl:w-[85%]"
                      >
                        {paragraph}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </div>
    </AnimationWhenInView>
  );
}
