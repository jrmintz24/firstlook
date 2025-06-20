export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent_feedback: {
        Row: {
          agent_id: string
          buyer_id: string
          buyer_interest_level: number | null
          buyer_seriousness_rating: number | null
          created_at: string
          id: string
          notes: string | null
          recommend_buyer: boolean | null
          showing_request_id: string
        }
        Insert: {
          agent_id: string
          buyer_id: string
          buyer_interest_level?: number | null
          buyer_seriousness_rating?: number | null
          created_at?: string
          id?: string
          notes?: string | null
          recommend_buyer?: boolean | null
          showing_request_id: string
        }
        Update: {
          agent_id?: string
          buyer_id?: string
          buyer_interest_level?: number | null
          buyer_seriousness_rating?: number | null
          created_at?: string
          id?: string
          notes?: string | null
          recommend_buyer?: boolean | null
          showing_request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_feedback_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_feedback_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_feedback_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      api_sync_logs: {
        Row: {
          completed_at: string | null
          error_message: string | null
          id: string
          records_processed: number | null
          started_at: string
          status: string
          sync_type: string
        }
        Insert: {
          completed_at?: string | null
          error_message?: string | null
          id?: string
          records_processed?: number | null
          started_at?: string
          status: string
          sync_type?: string
        }
        Update: {
          completed_at?: string | null
          error_message?: string | null
          id?: string
          records_processed?: number | null
          started_at?: string
          status?: string
          sync_type?: string
        }
        Relationships: []
      }
      buyer_feedback: {
        Row: {
          agent_comments: string | null
          agent_id: string | null
          agent_rating: number | null
          buyer_id: string
          created_at: string
          id: string
          property_comments: string | null
          property_rating: number | null
          showing_request_id: string
        }
        Insert: {
          agent_comments?: string | null
          agent_id?: string | null
          agent_rating?: number | null
          buyer_id: string
          created_at?: string
          id?: string
          property_comments?: string | null
          property_rating?: number | null
          showing_request_id: string
        }
        Update: {
          agent_comments?: string | null
          agent_id?: string | null
          agent_rating?: number | null
          buyer_id?: string
          created_at?: string
          id?: string
          property_comments?: string | null
          property_rating?: number | null
          showing_request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "buyer_feedback_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "buyer_feedback_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "buyer_feedback_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      follow_up_questions: {
        Row: {
          agent_id: string | null
          answer: string | null
          answered_at: string | null
          buyer_id: string
          created_at: string
          id: string
          question: string
          showing_request_id: string
        }
        Insert: {
          agent_id?: string | null
          answer?: string | null
          answered_at?: string | null
          buyer_id: string
          created_at?: string
          id?: string
          question: string
          showing_request_id: string
        }
        Update: {
          agent_id?: string | null
          answer?: string | null
          answered_at?: string | null
          buyer_id?: string
          created_at?: string
          id?: string
          question?: string
          showing_request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follow_up_questions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_up_questions_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_up_questions_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      house_assignments: {
        Row: {
          assigned_at: string
          house_id: string
          id: string
          status: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          house_id: string
          id?: string
          status?: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          house_id?: string
          id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "house_assignments_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      houses: {
        Row: {
          address: string
          available: boolean
          baths: number
          beds: number
          city: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          price: number
          sqft: number | null
          state: string
          updated_at: string
          zip_code: string | null
        }
        Insert: {
          address: string
          available?: boolean
          baths: number
          beds: number
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          price: number
          sqft?: number | null
          state?: string
          updated_at?: string
          zip_code?: string | null
        }
        Update: {
          address?: string
          available?: boolean
          baths?: number
          beds?: number
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          price?: number
          sqft?: number | null
          state?: string
          updated_at?: string
          zip_code?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          access_expires_at: string | null
          content: string
          created_at: string
          id: string
          read_at: string | null
          receiver_id: string | null
          sender_id: string | null
          showing_request_id: string | null
        }
        Insert: {
          access_expires_at?: string | null
          content: string
          created_at?: string
          id?: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
          showing_request_id?: string | null
        }
        Update: {
          access_expires_at?: string | null
          content?: string
          created_at?: string
          id?: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
          showing_request_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      open_houses: {
        Row: {
          address: string
          baths: number
          beds: number
          city: string
          created_at: string
          description: string | null
          id: string
          images: Json | null
          latitude: number | null
          listing_agent_email: string | null
          listing_agent_name: string | null
          listing_agent_phone: string | null
          longitude: number | null
          lot_size: string | null
          mls_id: string | null
          open_house_date: string
          open_house_end_time: string
          open_house_start_time: string
          price: number
          property_type: string | null
          sqft: number | null
          state: string
          status: string | null
          updated_at: string
          year_built: number | null
          zip_code: string | null
        }
        Insert: {
          address: string
          baths: number
          beds: number
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          latitude?: number | null
          listing_agent_email?: string | null
          listing_agent_name?: string | null
          listing_agent_phone?: string | null
          longitude?: number | null
          lot_size?: string | null
          mls_id?: string | null
          open_house_date: string
          open_house_end_time: string
          open_house_start_time: string
          price: number
          property_type?: string | null
          sqft?: number | null
          state?: string
          status?: string | null
          updated_at?: string
          year_built?: number | null
          zip_code?: string | null
        }
        Update: {
          address?: string
          baths?: number
          beds?: number
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          latitude?: number | null
          listing_agent_email?: string | null
          listing_agent_name?: string | null
          listing_agent_phone?: string | null
          longitude?: number | null
          lot_size?: string | null
          mls_id?: string | null
          open_house_date?: string
          open_house_end_time?: string
          open_house_start_time?: string
          price?: number
          property_type?: string | null
          sqft?: number | null
          state?: string
          status?: string | null
          updated_at?: string
          year_built?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      post_showing_actions: {
        Row: {
          action_details: Json | null
          action_type: string
          buyer_id: string
          created_at: string
          id: string
          showing_request_id: string
        }
        Insert: {
          action_details?: Json | null
          action_type: string
          buyer_id: string
          created_at?: string
          id?: string
          showing_request_id: string
        }
        Update: {
          action_details?: Json | null
          action_type?: string
          buyer_id?: string
          created_at?: string
          id?: string
          showing_request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_showing_actions_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_showing_actions_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          free_showing_used: boolean | null
          id: string
          last_name: string | null
          license_number: string | null
          phone: string | null
          subscription_status: string | null
          updated_at: string
          user_type: string | null
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          free_showing_used?: boolean | null
          id: string
          last_name?: string | null
          license_number?: string | null
          phone?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_type?: string | null
        }
        Update: {
          created_at?: string
          first_name?: string | null
          free_showing_used?: boolean | null
          id?: string
          last_name?: string | null
          license_number?: string | null
          phone?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_type?: string | null
        }
        Relationships: []
      }
      properties: {
        Row: {
          address: string
          baths: number
          beds: number
          city: string
          created_at: string
          description: string | null
          id: string
          images: Json | null
          latitude: number | null
          listing_agent_email: string | null
          listing_agent_name: string | null
          listing_agent_phone: string | null
          longitude: number | null
          lot_size: string | null
          mls_id: string | null
          price: number
          property_type: string | null
          sqft: number | null
          state: string
          status: string | null
          updated_at: string
          year_built: number | null
          zip_code: string | null
        }
        Insert: {
          address: string
          baths: number
          beds: number
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          latitude?: number | null
          listing_agent_email?: string | null
          listing_agent_name?: string | null
          listing_agent_phone?: string | null
          longitude?: number | null
          lot_size?: string | null
          mls_id?: string | null
          price: number
          property_type?: string | null
          sqft?: number | null
          state?: string
          status?: string | null
          updated_at?: string
          year_built?: number | null
          zip_code?: string | null
        }
        Update: {
          address?: string
          baths?: number
          beds?: number
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          images?: Json | null
          latitude?: number | null
          listing_agent_email?: string | null
          listing_agent_name?: string | null
          listing_agent_phone?: string | null
          longitude?: number | null
          lot_size?: string | null
          mls_id?: string | null
          price?: number
          property_type?: string | null
          sqft?: number | null
          state?: string
          status?: string | null
          updated_at?: string
          year_built?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      property_favorites: {
        Row: {
          buyer_id: string
          created_at: string
          id: string
          property_address: string
          showing_request_id: string | null
        }
        Insert: {
          buyer_id: string
          created_at?: string
          id?: string
          property_address: string
          showing_request_id?: string | null
        }
        Update: {
          buyer_id?: string
          created_at?: string
          id?: string
          property_address?: string
          showing_request_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_favorites_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_favorites_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      showing_attendance: {
        Row: {
          agent_attended: boolean | null
          agent_checked_out: boolean | null
          agent_checkout_time: string | null
          buyer_attended: boolean | null
          buyer_checked_out: boolean | null
          buyer_checkout_time: string | null
          created_at: string
          id: string
          showing_request_id: string
          updated_at: string
        }
        Insert: {
          agent_attended?: boolean | null
          agent_checked_out?: boolean | null
          agent_checkout_time?: string | null
          buyer_attended?: boolean | null
          buyer_checked_out?: boolean | null
          buyer_checkout_time?: string | null
          created_at?: string
          id?: string
          showing_request_id: string
          updated_at?: string
        }
        Update: {
          agent_attended?: boolean | null
          agent_checked_out?: boolean | null
          agent_checkout_time?: string | null
          buyer_attended?: boolean | null
          buyer_checked_out?: boolean | null
          buyer_checkout_time?: string | null
          created_at?: string
          id?: string
          showing_request_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "showing_attendance_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      showing_requests: {
        Row: {
          assigned_agent_email: string | null
          assigned_agent_id: string | null
          assigned_agent_name: string | null
          assigned_agent_phone: string | null
          buyer_consents_to_contact: boolean | null
          created_at: string
          estimated_confirmation_date: string | null
          id: string
          internal_notes: string | null
          message: string | null
          preferred_date: string | null
          preferred_time: string | null
          property_address: string
          requested_agent_email: string | null
          requested_agent_id: string | null
          requested_agent_name: string | null
          requested_agent_phone: string | null
          status: string | null
          status_updated_at: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assigned_agent_email?: string | null
          assigned_agent_id?: string | null
          assigned_agent_name?: string | null
          assigned_agent_phone?: string | null
          buyer_consents_to_contact?: boolean | null
          created_at?: string
          estimated_confirmation_date?: string | null
          id?: string
          internal_notes?: string | null
          message?: string | null
          preferred_date?: string | null
          preferred_time?: string | null
          property_address: string
          requested_agent_email?: string | null
          requested_agent_id?: string | null
          requested_agent_name?: string | null
          requested_agent_phone?: string | null
          status?: string | null
          status_updated_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assigned_agent_email?: string | null
          assigned_agent_id?: string | null
          assigned_agent_name?: string | null
          assigned_agent_phone?: string | null
          buyer_consents_to_contact?: boolean | null
          created_at?: string
          estimated_confirmation_date?: string | null
          id?: string
          internal_notes?: string | null
          message?: string | null
          preferred_date?: string | null
          preferred_time?: string | null
          property_address?: string
          requested_agent_email?: string | null
          requested_agent_id?: string | null
          requested_agent_name?: string | null
          requested_agent_phone?: string | null
          status?: string | null
          status_updated_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "showing_requests_assigned_agent_id_fkey"
            columns: ["assigned_agent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      tour_agreements: {
        Row: {
          agent_id: string | null
          buyer_id: string | null
          created_at: string
          id: string
          showing_request_id: string | null
          signed: boolean
          signed_at: string | null
        }
        Insert: {
          agent_id?: string | null
          buyer_id?: string | null
          created_at?: string
          id?: string
          showing_request_id?: string | null
          signed?: boolean
          signed_at?: string | null
        }
        Update: {
          agent_id?: string | null
          buyer_id?: string | null
          created_at?: string
          id?: string
          showing_request_id?: string | null
          signed?: boolean
          signed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tour_agreements_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tour_agreements_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tour_agreements_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_triggers: {
        Row: {
          created_at: string
          executed_at: string | null
          id: string
          payload: Json | null
          scheduled_for: string
          showing_request_id: string
          status: string
          trigger_type: string
        }
        Insert: {
          created_at?: string
          executed_at?: string | null
          id?: string
          payload?: Json | null
          scheduled_for: string
          showing_request_id: string
          status?: string
          trigger_type: string
        }
        Update: {
          created_at?: string
          executed_at?: string | null
          id?: string
          payload?: Json | null
          scheduled_for?: string
          showing_request_id?: string
          status?: string
          trigger_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_triggers_showing_request_id_fkey"
            columns: ["showing_request_id"]
            isOneToOne: false
            referencedRelation: "showing_requests"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_agent_access_buyer_contact: {
        Args: { p_showing_request_id: string; p_agent_id: string }
        Returns: boolean
      }
      check_showing_eligibility: {
        Args: { user_uuid: string }
        Returns: Json
      }
      get_user_type: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      mark_free_showing_used: {
        Args: { user_uuid: string }
        Returns: boolean
      }
      reset_free_showing_eligibility: {
        Args: { user_uuid: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
