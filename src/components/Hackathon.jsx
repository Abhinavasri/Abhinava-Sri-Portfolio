import React from "react";
import {
  Container,
  Card,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Launch } from "@mui/icons-material";
import { hackathon } from "../data";

export default function Hackathon() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
      }}
    >
      <Container id="hackathon" sx={{ maxWidth: 1100 }}>
        {/* Section Heading */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            background: "linear-gradient(90deg,#4F46E5,#EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 5,
          }}
        >
          Hackathon Experience
        </Typography>

        {hackathon.map((item, i) => (
          <Card
            key={i}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            sx={{
              p: 4,
              borderRadius: "20px",
              mb: 4,
              boxShadow: "0px 10px 35px rgba(79, 70, 229, 0.15)",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 14px 45px rgba(79, 70, 229, 0.3)",
                transform: "translateY(-6px)",
              },
            }}
          >
            {/* Hackathon Title */}
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#1E293B" }}>
              {item.name}
            </Typography>

            {/* Occasion */}
            <Typography
              variant="subtitle2"
              sx={{ color: "#4F46E5", mt: 0.5, fontWeight: 600 }}
            >
              {item.occasion}
            </Typography>

            {/* Project */}
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "text.primary",
                fontWeight: 600,
              }}
            >
              Project: {item.project}
            </Typography>

            {/* Features */}
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              {item.description}
            </Typography>

            {/* Tech Stack */}
            <Divider sx={{ my: 3 }} />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
            >
              Tech Stack
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {item.tech.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={{
                    fontWeight: 600,
                    borderRadius: "8px",
                    px: 1.5,
                    background:
                      "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
                    color: "#fff",
                    boxShadow: "0px 3px 12px rgba(99,102,241,0.3)",
                  }}
                />
              ))}
            </Stack>

            {/* Certificate */}
            {item.certificate && (
              <Button
                href={item.certificate}
                target="_blank"
                endIcon={<Launch />}
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #EC4899 0%, #6366F1 100%)",
                  },
                }}
              >
                View Certificate
              </Button>
            )}

            {/* Experience */}
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                color: "text.secondary",
                fontStyle: "italic",
              }}
            >
              {item.experience}
            </Typography>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
