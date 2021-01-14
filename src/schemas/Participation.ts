import { Schema, model } from "mongoose";

const ParticipationSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    participation: {
      type: Number,
      required: true,
    },
  },
);

export default model("Participation", ParticipationSchema);
