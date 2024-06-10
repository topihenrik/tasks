"use client"
import Button from "@/stories/Button/Button";
import {PageContainer} from "@/app/ui/PageContainer";

export default function Page() {
  return (
    <PageContainer title="Account">
      <div className="flex justify-center">
        <Button color="error">Delete account</Button>
      </div>
    </PageContainer>
  );
}
