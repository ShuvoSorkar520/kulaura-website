
import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Define the schema for form validation
const formSchema = z.object({
  name: z.string().min(1, { message: "নাম আবশ্যক" }),
  email: z.string().email({ message: "সঠিক ইমেইল দিন" }),
  subject: z.string().min(1, { message: "বিষয় আবশ্যক" }),
  message: z.string().min(10, { message: "কমপক্ষে ১০টি অক্ষর লিখুন" }),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Email sending simulation (in a real app, this would be an API call)
      console.log("Sending email with data:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "সফলভাবে পাঠানো হয়েছে",
        description: "আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      // Show error message
      toast({
        title: "সমস্যা হয়েছে",
        description: "মেসেজ পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">যোগাযোগ <span className="text-primary">করুন</span></h2>
          <p className="text-lg text-gray-700">আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-md p-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">আপনার নাম</FormLabel>
                      <FormControl>
                        <input 
                          {...field}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">ইমেইল</FormLabel>
                      <FormControl>
                        <input 
                          {...field}
                          type="email" 
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">বিষয়</FormLabel>
                      <FormControl>
                        <input 
                          {...field}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 mb-2">মেসেজ</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'অপেক্ষা করুন...' : 'মেসেজ পাঠান'}
                </Button>
              </form>
            </Form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">যোগাযোগের ঠিকানা</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">অফিস</h4>
                  <p className="text-gray-700">
                    ১২৩, গ্রীন রোড, ঢাকা-১২০৫, বাংলাদেশ
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">যোগাযোগ</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone size={18} className="text-primary" />
                    <span className="text-gray-700">+৮৮০ ১৮৫৪৮৭৯৫৭৪</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={18} className="text-primary" />
                    <span className="text-gray-700">info@kulabra.io</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">কার্যক্রম</h4>
                  <p className="text-gray-700">
                    সোম - শুক্র: সকাল ৯টা - সন্ধ্যা ৬টা
                  </p>
                  <p className="text-gray-700">
                    শনি - রবি: সকাল ১০টা - দুপুর ১টা
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">মানচিত্র এখানে দেখানো হবে</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
