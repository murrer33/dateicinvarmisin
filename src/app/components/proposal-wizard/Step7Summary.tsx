import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProposalData } from "@/types";
import { Badge } from "@/components/ui/badge";

interface Step7SummaryProps {
  data: ProposalData;
}

export default function Step7Summary({ data }: Step7SummaryProps) {
  return (
    <Card className="w-full max-w-md text-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold font-headline">Mükemmel! 🎉</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-semibold">Randevu detaylarımız:</p>
        <div className="flex flex-col items-center space-y-2 text-left">
            {data.dateType && <div className="flex items-center gap-2"><strong>Aktivite:</strong> <Badge variant="secondary">{data.dateType}</Badge></div>}
            {data.location && <div className="flex items-center gap-2"><strong>Konum:</strong> <Badge variant="secondary">{data.location}</Badge></div>}
            {data.contact && <div className="flex items-center gap-2"><strong>İletişim:</strong> <Badge variant="secondary">{data.contact}</Badge></div>}
        </div>
        <CardDescription className="text-lg !mt-6">
          Sana en kısa sürede ulaşacağım! Sabırsızlanıyorum!
        </CardDescription>
      </CardContent>
    </Card>
  );
}
