#FROM chaowenguo/pal:js
#RUN ["bash", "-c", "apt install -y --no-install-recommends python3-pip; pip install jupyterlab"]

FROM python:slim
RUN pip install jupyterlab
