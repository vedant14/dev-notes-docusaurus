```
gcloud functions deploy nodejs-pubsub-function \
--runtime=nodejs20 \
--source=. \
--entry-point=helloPubSub \  
--trigger-topic=YOUR_TOPIC_NAME
```

https://cloud.google.com/functions/docs/tutorials/pubsub

```
gcloud functions deploy save-cron \
--gen2 \
--source=. \
--runtime=nodejs18 \
--entry-point=saveCron \
--trigger-http \
--set-env-vars SUPABASE_URL=https://artndindrfyuacltywex.supabase.co,SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydG5kaW5kcmZ5dWFjbHR5d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTM4MTMsImV4cCI6MjAzMDEyOTgxM30.WUBzOBmPl0Gypxb4Ua5yVKxGiCd6HffE40FI5GYHrmU

```

```
gcloud functions deploy process-cron \
--gen2 \
--source=. \
--runtime=nodejs18 \
--entry-point=processCron \
--trigger-http \
--set-env-vars SUPABASE_URL=https://artndindrfyuacltywex.supabase.co,SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydG5kaW5kcmZ5dWFjbHR5d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTM4MTMsImV4cCI6MjAzMDEyOTgxM30.WUBzOBmPl0Gypxb4Ua5yVKxGiCd6HffE40FI5GYHrmU

```


```
gcloud functions deploy send-intro-message \
--gen2 \
--source=. \
--runtime=nodejs18 \
--entry-point=sendIntroMessage \
--trigger-http \
--set-env-vars SUPABASE_URL=https://artndindrfyuacltywex.supabase.co,SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydG5kaW5kcmZ5dWFjbHR5d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTM4MTMsImV4cCI6MjAzMDEyOTgxM30.WUBzOBmPl0Gypxb4Ua5yVKxGiCd6HffE40FI5GYHrmU,ENCRYPTION_STRING=h0mzhub1

```


```
gcloud functions deploy process-reply \
--gen2 \
--source=. \
--runtime=nodejs18 \
--entry-point=processReply \
--trigger-http \
--set-env-vars SUPABASE_URL=https://artndindrfyuacltywex.supabase.co,SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydG5kaW5kcmZ5dWFjbHR5d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTM4MTMsImV4cCI6MjAzMDEyOTgxM30.WUBzOBmPl0Gypxb4Ua5yVKxGiCd6HffE40FI5GYHrmU

```

```
gcloud functions deploy send-whatsapp-reply \
--gen2 \
--source=. \
--runtime=nodejs18 \
--entry-point=sendReply \
--trigger-http \
--set-env-vars SUPABASE_URL=https://artndindrfyuacltywex.supabase.co,SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydG5kaW5kcmZ5dWFjbHR5d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTM4MTMsImV4cCI6MjAzMDEyOTgxM30.WUBzOBmPl0Gypxb4Ua5yVKxGiCd6HffE40FI5GYHrmU,ENCRYPTION_STRING=h0mzhub1

```


```
gcloud functions deploy process-renewal \
--gen2 \
--source=. \
--runtime=nodejs18 \
--entry-point=processRenewal \
--trigger-http \
--set-env-vars SUPABASE_URL=https://artndindrfyuacltywex.supabase.co,SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydG5kaW5kcmZ5dWFjbHR5d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTM4MTMsImV4cCI6MjAzMDEyOTgxM30.WUBzOBmPl0Gypxb4Ua5yVKxGiCd6HffE40FI5GYHrmU
```


```
gcloud functions deploy renewal-sub-function \
--gen2 \
--source=. \
--runtime=nodejs18 \
--entry-point=renewalSubFunction \
--trigger-http \
--set-env-vars SUPABASE_URL=https://artndindrfyuacltywex.supabase.co,SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydG5kaW5kcmZ5dWFjbHR5d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTM4MTMsImV4cCI6MjAzMDEyOTgxM30.WUBzOBmPl0Gypxb4Ua5yVKxGiCd6HffE40FI5GYHrmU
```

```
gcloud pubsub topics create TOPIC_ID
```


```
gcloud pubsub subscriptions create renewal-topic-sub --topic=renewal-topic --push-endpoint=https://271c-2406-7400-10a-7773-6cab-5aa4-2351-7fba.ngrok-free.app
```