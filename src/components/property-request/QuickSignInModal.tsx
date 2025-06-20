
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface QuickSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const QuickSignInModal = ({ isOpen, onClose, onSuccess }: QuickSignInModalProps) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp, signIn } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        console.log('Quick sign up attempt:', email);
        
        // Store flag to indicate this is a new user from property request
        localStorage.setItem('newUserFromPropertyRequest', 'true');
        
        await signUp(email, password);
        
        toast({
          title: "Account Created!",
          description: "Welcome to FirstLook! Your tour request will be processed automatically...",
        });
        
      } else {
        console.log('Quick sign in attempt:', email);
        await signIn(email, password);
        
        toast({
          title: "Welcome Back!",
          description: "Processing your tour request...",
        });
      }
      
      // Close modal and trigger success callback
      onClose();
      
      // Small delay to let the auth state settle, then call success
      setTimeout(() => {
        onSuccess();
      }, 500);
      
    } catch (error: any) {
      console.error('Auth error:', error);
      toast({
        title: "Authentication Error",
        description: error.message || "Failed to authenticate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isSignUp ? "Create Account to Continue" : "Sign In to Continue"}
          </DialogTitle>
          <DialogDescription>
            {isSignUp 
              ? "Create an account to complete your tour request" 
              : "Sign in to your existing account to continue"
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Processing...' : (isSignUp ? 'Create Account & Book Tour' : 'Sign In & Book Tour')}
            </Button>
            
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => setIsSignUp(!isSignUp)}
              disabled={loading}
              className="w-full"
            >
              {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuickSignInModal;
