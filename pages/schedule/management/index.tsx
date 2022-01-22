import ScheduleBoard from "components/ScheduleBoard";
import Seo from "components/SEO";
import { useRouter } from "next/router";

export default function Management() {
  return (
    <>
      <Seo title="일정 관리 | Scheduler" />
      <ScheduleBoard />
    </>
  );
}
