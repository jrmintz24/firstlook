
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowRight, Loader2 } from "lucide-react";
import { PropertyRequestFormData } from "@/types/propertyRequest";
import { useAuth } from "@/contexts/AuthContext";

interface SummaryStepProps {
  formData: PropertyRequestFormData;
  onInputChange: (field: string, value: string) => void;
  onContinueToSubscriptions: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

const SummaryStep = ({ formData, onInputChange, onContinueToSubscriptions, onBack, isSubmitting }: SummaryStepProps) => {
  const { user } = useAuth();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" />
          Tour Session Summary
        </CardTitle>
        <CardDescription>
          Review your tour details and {user ? 'submit your request' : 'continue to sign in'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Tour Summary */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Your Tour Session</h4>
          <div className="space-y-2 text-sm text-blue-800">
            <div>
              <strong>Properties:</strong> {formData.selectedProperties.length || 1} home{(formData.selectedProperties.length || 1) > 1 ? 's' : ''}
            </div>
            {formData.selectedProperties.length > 0 ? (
              <ul className="list-disc list-inside ml-2">
                {formData.selectedProperties.map((property, index) => (
                  <li key={index}>{property}</li>
                ))}
              </ul>
            ) : (
              <div className="ml-2">{formData.propertyAddress}</div>
            )}
            {formData.preferredDate1 && formData.preferredTime1 && (
              <div><strong>Preferred Time:</strong> {formData.preferredDate1} at {formData.preferredTime1}</div>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="notes">Special Requests (Optional)</Label>
          <Textarea
            id="notes"
            placeholder="Any specific areas you'd like to focus on, accessibility needs, or questions about the properties..."
            value={formData.notes}
            onChange={(e) => onInputChange('notes', e.target.value)}
            rows={3}
            disabled={isSubmitting}
          />
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-900 mb-2">🎉 {user ? 'Ready to Submit!' : 'Almost Ready!'}</h4>
          <p className="text-sm text-green-700 mb-3">
            {user 
              ? "Click below to submit your showing request. We'll match you with a licensed showing partner and confirm your tour within 24 hours."
              : "Next, you'll sign in and we'll submit your request. We'll then match you with a licensed showing partner and confirm your tour within 24 hours."
            }
          </p>
          <div className="text-xs text-green-600">
            <div>✓ Licensed DC professionals only</div>
            <div>✓ No pressure, no agent commitments</div>
            <div>✓ Your contact info stays private</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={onBack} 
            className="flex-1"
            disabled={isSubmitting}
          >
            Back
          </Button>
          <Button 
            onClick={onContinueToSubscriptions}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : user ? (
              <>
                Submit Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Sign In & Submit
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryStep;
